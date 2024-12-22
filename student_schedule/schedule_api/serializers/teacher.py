from schedule_admin.models.teacher import Teacher
from schedule_api.serializers.base import HyperlinkedUUIDSerializer


class TeacherSerializer(HyperlinkedUUIDSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class ShortTeacherSerializer(HyperlinkedUUIDSerializer):
    class Meta:
        model = Teacher
        fields = ["uuid", "url", "name", "short_name"]
        read_only_fields = ["uuid", "url", "name", "short_name"]
