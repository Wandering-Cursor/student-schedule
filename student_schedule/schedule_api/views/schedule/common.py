import datetime

from django.utils import timezone
from django_filters import rest_framework as filters
from rest_framework import mixins, permissions, viewsets
from schedule_admin.models.schedule.schedule import Schedule
from schedule_admin.models.user import User
from schedule_api.filters.schedule import ScheduleFilter, WeekScheduleForGroupFilter
from schedule_api.serializers.schedule.common import (
    ScheduleSerializer,
    WeekScheduleForGroupSerializer,
)
from schedule_api.views.base import AuthenticatedView


class ScheduleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Schedules of the organization. Combined view of Photo/Group schedules for a date.
    """

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ScheduleFilter


class WeekScheduleForGroupViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    AuthenticatedView,
):
    queryset = Schedule.objects.all()
    serializer_class = WeekScheduleForGroupSerializer
    permission_classes = [permissions.AllowAny]
    filterset_class = WeekScheduleForGroupFilter
    filter_backends = (filters.DjangoFilterBackend,)

    @staticmethod
    def get_week_day_with_offset(offset: int = 0) -> datetime.date:
        if offset not in range(0, 7):
            raise ValueError("Start of the week offset should be in range [0-6]")

        today = timezone.now().date()
        week_start = today - datetime.timedelta(days=today.weekday())

        return week_start + datetime.timedelta(days=offset)

    def get_serializer_context(self):
        value = super().get_serializer_context()

        user = self.request.user
        group = self.request.GET.get("group", None)

        if not group and user.is_authenticated:
            user: User
            group = user.related_group.uuid

        value["group"] = group
        return value

    def filter_queryset(self, queryset):
        qs = super().filter_queryset(queryset)

        user = self.request.user

        if user.is_authenticated and not self.request.GET.get("group"):
            user: User
            qs = qs.filter(group_schedules__group=user.related_group)

        qs = qs.filter(
            for_date__gte=self.get_week_day_with_offset(0),
            for_date__lte=self.get_week_day_with_offset(6),
        )

        return qs
