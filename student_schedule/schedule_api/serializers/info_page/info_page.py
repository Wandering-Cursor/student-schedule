from schedule_admin.models.info_pages.info_pages import InfoPage
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.info_page.document import DocumentSerializer
from schedule_api.serializers.info_page.tag import TagSerializer


class InfoPageSerializer(HyperlinkedUUIDSerializer):
    related_files = DocumentSerializer(
        many=True,
        read_only=True,
    )
    tags = TagSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = InfoPage
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
