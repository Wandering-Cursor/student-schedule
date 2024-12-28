from rest_framework import serializers
from schedule_admin.models.schedule.group import GroupSchedule, Lesson
from schedule_admin.models.schedule.pairs import Pair
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.group import ShortGroupSerializer
from schedule_api.serializers.teacher import ShortTeacherSerializer


class PairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pair
        fields = ["name", "start_time", "end_time"]
        read_only_fields = ["name", "start_time", "end_time"]


class LessonSerializer(serializers.ModelSerializer):
    pair = PairSerializer()
    teacher = ShortTeacherSerializer()

    class Meta:
        model = Lesson
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class GroupScheduleSerializer(HyperlinkedUUIDSerializer):
    lessons = LessonSerializer(
        many=True,
    )
    group = ShortGroupSerializer()

    class Meta:
        model = GroupSchedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class ShortGroupScheduleInfo(HyperlinkedUUIDSerializer):
    group = ShortGroupSerializer()

    class Meta:
        model = GroupSchedule
        fields = ["uuid", "url", "group"]
        read_only_fields = ["uuid", "url", "group"]
