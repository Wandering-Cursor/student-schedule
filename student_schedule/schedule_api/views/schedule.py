from django_filters import rest_framework as filters
from rest_framework import permissions, viewsets
from schedule_admin.models.group_schedule import GroupSchedule
from schedule_admin.models.photo_schedule import PhotoSchedule
from schedule_admin.models.schedule import Schedule
from schedule_api.filters.schedule import ScheduleFilter
from schedule_api.serializers.schedule import (
    GroupScheduleSerializer,
    PhotoScheduleSerializer,
    ScheduleSerializer,
)


class ScheduleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Schedules of the organization
    """

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ScheduleFilter


class PhotoScheduleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Schedules of the organization
    """

    queryset = PhotoSchedule.objects.all()
    serializer_class = PhotoScheduleSerializer
    permission_classes = [permissions.AllowAny]


class GroupScheduleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Schedules of the organization
    """

    queryset = GroupSchedule.objects.all()
    serializer_class = GroupScheduleSerializer
    permission_classes = [permissions.AllowAny]
