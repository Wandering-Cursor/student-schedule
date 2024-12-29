from schedule_admin.models.group import Group
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.specialty.short import ShortSpecialtySerializer


class GroupSerializer(HyperlinkedUUIDSerializer):
    specialty = ShortSpecialtySerializer()

    class Meta:
        model = Group
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
