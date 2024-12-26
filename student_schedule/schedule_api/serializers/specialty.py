from schedule_admin.models.specialty import Specialty
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.group import ShortGroupSerializer


class SpecialtySerializer(HyperlinkedUUIDSerializer):
    groups = ShortGroupSerializer(many=True)

    class Meta:
        model = Specialty
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
