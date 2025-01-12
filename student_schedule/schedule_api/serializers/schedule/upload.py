import csv
import datetime

from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework import serializers
from schedule_admin.models.group import Group
from schedule_admin.models.schedule.group import GroupSchedule, Lesson
from schedule_admin.models.schedule.pairs import Pair
from schedule_admin.models.schedule.photo import PhotoSchedule, SchedulePhoto
from schedule_admin.models.schedule.schedule import Schedule
from schedule_admin.models.teacher import Teacher


class LessonRepresentation:
    def __init__(
        self: "LessonRepresentation",
        pair_no: str,
        name: str,
        teacher: str,
        room: str,
    ):
        self.pair_no = pair_no
        self.name = name
        self.teacher = teacher
        self.room = room

    def __str__(self: "LessonRepresentation") -> str:
        return f"{self.pair_no}. {self.name} ({self.room}) - {self.teacher}"

    def __repr__(self: "LessonRepresentation") -> str:
        pair_no = self.pair_no
        name = self.name
        teacher = self.teacher
        room = self.room

        return f"LessonRepresentation({pair_no=}, {name=}, {teacher=}, {room=})"


class GroupRepresentation:
    def __init__(self, name: str, pairs: list[LessonRepresentation]):
        self.name = name
        self.pairs = pairs

    def __str__(self):
        return self.name

    def __repr__(self):
        name = self.name
        pairs = self.pairs

        return f"GroupRepresentation({name=}, {pairs=})"


class UploadScheduleSerializer(serializers.Serializer):
    for_date = serializers.DateField()

    name = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    photos = serializers.ListField(
        required=False,
        child=serializers.ImageField(),
    )
    file = serializers.FileField(
        required=False,
        allow_null=True,
    )

    def validate_file(self, value: "InMemoryUploadedFile"):
        file = value

        if not file:
            return []

        if not file.name.endswith(".csv"):
            raise serializers.ValidationError("File should be CSV")

        reader = csv.reader(file.read().decode("utf-8").splitlines())
        all_rows = list(reader)

        headers = all_rows.pop(0)

        group_rows = []
        groups = []

        for i in range(0, len(all_rows), 3):
            group_rows.append(all_rows[i : i + 3])

        for group in group_rows:
            group_name = group[0][0]
            pairs = []
            for iterator, pair_name in enumerate(group[0][1:]):
                iterator += 1
                pairs.append(
                    LessonRepresentation(
                        pair_no=headers[iterator],
                        name=pair_name,
                        teacher=group[1][iterator],
                        room=group[2][iterator],
                    )
                )
            groups.append(
                GroupRepresentation(
                    name=group_name,
                    pairs=pairs,
                ),
            )

        return groups

    def _fetch_lesson(
        self: "UploadScheduleSerializer",
        pair: LessonRepresentation,
        errors: list[str],
    ) -> Pair | None:
        if pair.name == "":
            return

        teacher_names = pair.teacher.split(" ")

        try:
            teacher = Teacher.objects.get(
                last_name=teacher_names[0],
                first_name=teacher_names[1],
                middle_name="".join(teacher_names[2:]) or "",
            )
        except Teacher.DoesNotExist:
            errors.append(f"Teacher {pair.teacher} not found")
            return

        try:
            pair_entity = Pair.objects.get(name=pair.pair_no)
        except Pair.DoesNotExist:
            errors.append(f"Pair {pair.pair_no} not found")
            return

        lesson_entity, _ = Lesson.objects.get_or_create(
            pair=pair_entity,
            name=pair.name,
            teacher=teacher,
            room=pair.room,
        )

        return lesson_entity

    def validate(self, attrs):
        for_date: datetime.date = attrs["for_date"]
        photos = attrs.get("photos")
        groups: list[GroupRepresentation] = attrs.get("file", [])

        file: list[GroupRepresentation] | None = attrs.get("file")
        if not photos and not file:
            raise serializers.ValidationError(
                "Either photos or file should be provided"
            )

        groups_schedules = []
        errors = []

        for schedule in groups:
            group = Group.objects.get(name=schedule.name)
            group_schedule, _ = GroupSchedule.objects.get_or_create(
                group=group,
                for_date=for_date,
            )
            group_schedule.lessons.clear()

            for pair in schedule.pairs:
                lesson = self._fetch_lesson(
                    pair=pair,
                    errors=errors,
                )
                if lesson:
                    group_schedule.lessons.add(lesson)

            groups_schedules.append(group_schedule)

        if errors:
            raise serializers.ValidationError(
                {
                    "file": errors,
                },
            )

        return {
            **attrs,
            "groups_schedules": groups_schedules,
        }

    def create(self, validated_data) -> Schedule:
        """Make a list of schedules from the uploaded file before creating the schedule (in validation)"""
        for_date: datetime.date = validated_data["for_date"]

        photos: list["InMemoryUploadedFile"] = validated_data.get("photos")
        groups_schedules: list[GroupSchedule] = validated_data["groups_schedules"]

        photo_schedule: PhotoSchedule | None = None

        if photos:
            photo_schedule = PhotoSchedule(name=validated_data.get("name", ""))
            photo_schedule.save()

            for photo in photos:
                photo_object = SchedulePhoto(file=photo)
                photo_object.save()

                photo_schedule.photos.add(photo_object)

            photo_schedule.save()

        if groups_schedules:
            for schedule in groups_schedules:
                schedule.save()

        schedule, _ = Schedule.objects.get_or_create(for_date=for_date)

        if groups_schedules:
            schedule.group_schedules.set(groups_schedules)
        if photo_schedule:
            schedule.photo_schedule = photo_schedule

        schedule.save()

        return schedule
