from rest_framework import serializers
from schedule_admin.models.photo_schedule import PhotoSchedule, PhotoSchedulePhoto


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
