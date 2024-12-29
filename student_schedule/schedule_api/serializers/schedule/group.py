from rest_framework import serializers
from schedule_admin.models.schedule.group import GroupSchedule, Lesson
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.group.short import ShortGroupSerializer
from schedule_api.serializers.pair.pair import PairSerializer
from schedule_api.serializers.teacher.short import ShortTeacherSerializer


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
