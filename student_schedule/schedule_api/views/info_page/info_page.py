from django_filters import rest_framework as filters
from rest_framework import permissions, viewsets
from schedule_admin.models.info_pages.info_pages import InfoPage
from schedule_api.filters.info_page import InfoPageFilter
from schedule_api.serializers.info_page.info_page import InfoPageSerializer


class InfoPageViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Documents of the organization
    """

    queryset = InfoPage.objects.all()
    serializer_class = InfoPageSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = InfoPageFilter

    def get_queryset(self):
        return super().get_queryset().order_by("-created_at")
