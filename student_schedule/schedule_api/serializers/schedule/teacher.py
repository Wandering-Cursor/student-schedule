from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers
from schedule_admin.models.teacher.schedule import TeacherSchedule
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.schedule.common import (
    StudentScheduleToTeacherScheduleSerializer,
)
from schedule_api.serializers.schedule.photo import PhotoSchedulePhotoSerializer


class GeneratedLessonForTeacherSerializer(serializers.Serializer):
    pair = serializers.CharField()

    start_time = serializers.TimeField()
    end_time = serializers.TimeField()

    room = serializers.CharField()

    group_name = serializers.CharField()


class GeneratedScheduleForTeacherSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    middle_name = serializers.CharField(
        allow_null=True,
    )

    lessons = GeneratedLessonForTeacherSerializer(
        many=True,
    )


class GeneratedTeacherScheduleSerializer(serializers.Serializer):
    teachers = GeneratedScheduleForTeacherSerializer(
        many=True,
    )


class TeacherScheduleSerializer(HyperlinkedUUIDSerializer):
    photos = PhotoSchedulePhotoSerializer(
        many=True,
    )
    schedule = serializers.SerializerMethodField(
        method_name="get_schedule",
        allow_null=True,
    )

    @extend_schema_field(GeneratedTeacherScheduleSerializer)
    def get_schedule(
        self, instance: TeacherSchedule
    ) -> GeneratedTeacherScheduleSerializer | None:
        if not instance.student_schedule:
            return None

        serializer = StudentScheduleToTeacherScheduleSerializer(
            data={
                "student_schedule": instance.student_schedule.uuid,
            }
        )
        serializer.is_valid(raise_exception=True)

        result = serializer.create(serializer.validated_data)

        return GeneratedTeacherScheduleSerializer(result).data

    class Meta:
        model = TeacherSchedule
        fields = "__all__"
