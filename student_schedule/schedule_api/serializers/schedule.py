import csv
import datetime
import typing

from rest_framework import serializers
from schedule_admin.models.group import Group
from schedule_admin.models.group_schedule import GroupSchedule, ScheduledPair
from schedule_admin.models.pair_schedule import Pair
from schedule_admin.models.photo_schedule import PhotoSchedule, PhotoSchedulePhoto
from schedule_admin.models.schedule import Schedule
from schedule_admin.models.teacher import Teacher
from schedule_api.serializers.group_schedule import ShortGroupScheduleInfo

if typing.TYPE_CHECKING:
    from django.core.files.uploadedfile import InMemoryUploadedFile


class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    group_schedules = ShortGroupScheduleInfo(many=True)

    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class PairRepresentation:
    def __init__(
        self: "PairRepresentation",
        pair_no: str,
        name: str,
        teacher: str,
        room: str,
    ):
        self.pair_no = pair_no
        self.name = name
        self.teacher = teacher
        self.room = room

    def __str__(self: "PairRepresentation") -> str:
        return f"{self.pair_no}. {self.name} ({self.room}) - {self.teacher}"

    def __repr__(self: "PairRepresentation") -> str:
        pair_no = self.pair_no
        name = self.name
        teacher = self.teacher
        room = self.room

        return f"PairRepresentation({pair_no=}, {name=}, {teacher=}, {room=})"


class GroupRepresentation:
    def __init__(self, name: str, pairs: list[PairRepresentation]):
        self.name = name
        self.pairs = pairs

    def __str__(self):
        return self.name

    def __repr__(self):
        name = self.name
        pairs = self.pairs

        return f"GroupRepresentation({name=}, {pairs=})"


class ScheduleUploadSerializer(serializers.Serializer):
    for_date = serializers.DateField()
    photos = serializers.ListField(
        required=False,
        child=serializers.ImageField(),
    )
    file = serializers.FileField(
        required=False,
    )

    def validate_file(self, value: "InMemoryUploadedFile"):
        file = value
        if not file.name.endswith(".csv"):
            raise serializers.ValidationError("File should be CSV")

        reader = csv.reader(file.read().decode("utf-8").splitlines())
        all_rows = [row for row in reader]

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
                    PairRepresentation(
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

    def validate(self, attrs):
        photos = attrs.get("photos")
        file: list[GroupRepresentation] | None = attrs.get("file")
        if not photos and not file:
            raise serializers.ValidationError(
                "Either photos or file should be provided"
            )

        return attrs

    def create(self, validated_data) -> Schedule:
        for_date: datetime.date = validated_data["for_date"]

        photos: list["InMemoryUploadedFile"] = validated_data.get("photos")
        groups_schedule: list[GroupRepresentation] = validated_data["file"]

        photo_schedule: PhotoSchedule | None = None
        groups_schedules: list[GroupSchedule] = []

        if photos:
            photo_schedule = PhotoSchedule()
            photo_schedule.save()

            for photo in photos:
                photo_object = PhotoSchedulePhoto(file=photo)
                photo_object.save()

                photo_schedule.photos.add(photo_object)

            photo_schedule.save()

        if groups_schedule:
            for schedule in groups_schedule:
                group = Group.objects.get(name=schedule.name)
                group_schedule, _ = GroupSchedule.objects.get_or_create(
                    group=group,
                    for_date=for_date,
                )
                group_schedule.scheduled_pairs.clear()

                for pair in schedule.pairs:
                    if pair.name == "":
                        continue

                    teacher_names = pair.teacher.split(" ")
                    teacher = Teacher.objects.get(
                        last_name=teacher_names[0],
                        first_name=teacher_names[1],
                        middle_name="".join(teacher_names[2:]) or "",
                    )
                    group_schedule.scheduled_pairs.add(
                        ScheduledPair.objects.get_or_create(
                            pair=Pair.objects.get(name=pair.pair_no),
                            name=pair.name,
                            teacher=teacher,
                            room=pair.room,
                        )[0]
                    )
                group_schedule.save()
                groups_schedules.append(group_schedule)

        schedule, _ = Schedule.objects.get_or_create(for_date=for_date)

        if groups_schedules:
            schedule.group_schedules.set(groups_schedules)
        if photo_schedule:
            schedule.photo_schedules = photo_schedule

        schedule.save()

        return schedule
