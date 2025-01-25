from collections import defaultdict
from copy import deepcopy

from rest_framework import serializers
from schedule_admin.models.schedule.schedule import Schedule
from schedule_admin.models.teacher.teacher import Teacher
from schedule_api.schemas.teacher_schedule import (
    ScheduleForTeacher,
    TeacherLesson,
    TeacherSchedule,
)
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.schedule.group import ShortGroupScheduleInfo


class ScheduleSerializer(HyperlinkedUUIDSerializer):
    group_schedules = ShortGroupScheduleInfo(many=True)

    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class WeekScheduleForGroupSerializer(HyperlinkedUUIDSerializer):
    group_schedules = ShortGroupScheduleInfo(many=True)

    def __filter_group_schedules(self, group: str, value: dict) -> dict:
        filtered_schedules = []
        schedules = deepcopy(value.get("group_schedules", []))

        for schedule in schedules:
            if schedule["group"]["uuid"] != group:
                continue
            filtered_schedules.append(schedule)
        value["group_schedules"] = filtered_schedules

        return value

    def to_representation(self, instance):
        value = super().to_representation(instance)

        context = self.context
        group = context.get("group", None)

        if group is not None:
            value = self.__filter_group_schedules(str(group), value)

        return value

    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class StudentScheduleToTeacherScheduleSerializer(serializers.Serializer):
    student_schedule = serializers.UUIDField(
        required=True,
    )

    def validate_student_schedule(self, value) -> "Schedule":
        try:
            return Schedule.objects.get(uuid=value)
        except Schedule.DoesNotExist:
            raise serializers.ValidationError("Student schedule does not exist")

    def create(self, validated_data: dict) -> TeacherSchedule:
        teachers: dict[Teacher, list[TeacherLesson]] = defaultdict(list)
        schedule: Schedule = validated_data["student_schedule"]

        group_schedules = schedule.group_schedules.all()
        for per_group in group_schedules:
            lessons = per_group.lessons.all()
            for lesson in lessons:
                pair = lesson.pair
                teacher = lesson.teacher

                teachers[teacher].append(
                    TeacherLesson(
                        pair=pair.name,
                        start_time=pair.start_time,
                        end_time=pair.end_time,
                        room=lesson.room,
                        group_name=per_group.group.name,
                    )
                )

        teacher_schedules = [
            ScheduleForTeacher(
                first_name=teacher.first_name,
                last_name=teacher.last_name,
                middle_name=teacher.middle_name,
                lessons=lessons,
            )
            for teacher, lessons in teachers.items()
        ]

        return TeacherSchedule(teachers=teacher_schedules)
