from django_filters import rest_framework as filters
from rest_framework import permissions, viewsets
from schedule_admin.models.group import Group
from schedule_api.filters.group import GroupFilter
from schedule_api.serializers.group.full import GroupSerializer


class GroupViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Groups of some Specialty
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = GroupFilter
