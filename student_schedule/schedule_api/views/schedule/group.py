from rest_framework import mixins, permissions, viewsets
from schedule_admin.models.schedule.group import GroupSchedule
from schedule_api.serializers.schedule.group import GroupScheduleSerializer


class GroupScheduleViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    Allows to view Schedules of the organization
    """

    queryset = GroupSchedule.objects.all()
    serializer_class = GroupScheduleSerializer
    permission_classes = [permissions.AllowAny]
