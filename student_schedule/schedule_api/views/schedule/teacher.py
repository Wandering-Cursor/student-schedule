from django_filters import rest_framework as filters
from rest_framework import viewsets
from schedule_admin.models.teacher.schedule import TeacherSchedule
from schedule_api.filters.schedule import TeacherScheduleFilter
from schedule_api.permissions.teacher import AllowTeacher
from schedule_api.serializers.schedule.teacher import TeacherScheduleSerializer
from schedule_api.views.base import AuthenticatedView


class TeacherScheduleViewSet(
    viewsets.ReadOnlyModelViewSet,
    AuthenticatedView,
):
    """
    Allows to view Schedules of the organization. Combined view of Photo/Group schedules for a date.
    """

    queryset = TeacherSchedule.objects.all()
    serializer_class = TeacherScheduleSerializer
    permission_classes = [AllowTeacher]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TeacherScheduleFilter
