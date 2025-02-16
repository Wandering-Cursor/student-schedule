from django_filters import rest_framework as filters
from rest_framework import permissions, viewsets
from schedule_admin.models.info_pages.tags import Tag
from schedule_api.filters.tag import TagFilter
from schedule_api.serializers.info_page.tag import TagSerializer


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Documents of the organization
    """

    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TagFilter

    def get_queryset(self):
        return super().get_queryset().order_by("name")
