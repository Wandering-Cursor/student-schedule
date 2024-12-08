from rest_framework import serializers
from schedule_admin.models.teacher import Teacher


class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class ShortTeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = ["uuid", "url", "name", "short_name"]
        read_only_fields = ["uuid", "url", "name", "short_name"]
