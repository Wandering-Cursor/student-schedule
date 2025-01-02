from schedule_admin.models.info_pages.tags import Tag
from schedule_api.serializers.base import HyperlinkedUUIDSerializer


class TagSerializer(HyperlinkedUUIDSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
