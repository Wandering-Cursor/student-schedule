from rest_framework import serializers
from schedule_admin.models.group_schedule import GroupSchedule, ScheduledPair
from schedule_admin.models.pair_schedule import Pair
from schedule_admin.models.photo_schedule import PhotoSchedule, PhotoSchedulePhoto
from schedule_admin.models.schedule import Schedule
from schedule_api.serializers.teacher import ShortTeacherSerializer


class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class PhotoSchedulePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoSchedulePhoto
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at", "file"]


class PhotoScheduleSerializer(serializers.HyperlinkedModelSerializer):
    photos = PhotoSchedulePhotoSerializer(
        many=True,
    )

    class Meta:
        model = PhotoSchedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class PairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pair
        fields = ["name", "start_time", "end_time"]
        read_only_fields = ["name", "start_time", "end_time"]


class ScheduledPairSerializer(serializers.ModelSerializer):
    pair = PairSerializer()
    teacher = ShortTeacherSerializer()

    class Meta:
        model = ScheduledPair
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class GroupScheduleSerializer(serializers.HyperlinkedModelSerializer):
    scheduled_pairs = ScheduledPairSerializer(
        many=True,
    )

    class Meta:
        model = GroupSchedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
