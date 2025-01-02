from django_filters import rest_framework as filters
from rest_framework import permissions, viewsets
from schedule_admin.models.schedule.schedule import Schedule
from schedule_api.filters.schedule import ScheduleFilter
from schedule_api.serializers.schedule.common import ScheduleSerializer


class ScheduleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Schedules of the organization. Combined view of Photo/Group schedules for a date.
    """

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ScheduleFilter
