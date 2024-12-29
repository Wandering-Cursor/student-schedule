from rest_framework import mixins, permissions, viewsets
from schedule_admin.models.schedule.photo import PhotoSchedule
from schedule_api.serializers.schedule.photo import PhotoScheduleSerializer


class PhotoScheduleViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    Allows to view Schedules of the organization
    """

    queryset = PhotoSchedule.objects.all()
    serializer_class = PhotoScheduleSerializer
    permission_classes = [permissions.AllowAny]
