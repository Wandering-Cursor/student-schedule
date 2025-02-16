from drf_spectacular.utils import extend_schema
from rest_framework import permissions
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from schedule_api.serializers.schedule.common import ScheduleSerializer
from schedule_api.serializers.schedule.upload import UploadScheduleSerializer
from schedule_api.views.base import AuthenticatedView


class UploadScheduleAPIView(ViewSet, AuthenticatedView):
    permission_classes = (
        *AuthenticatedView.permission_classes,
        permissions.IsAdminUser,
    )
    serializer_class = UploadScheduleSerializer
    response_serializer_class = ScheduleSerializer

    @extend_schema(
        request={
            "multipart/form-data": UploadScheduleSerializer,
            "application/json": UploadScheduleSerializer,
        }
    )
    def create(self, request: "Request", *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        schedule = serializer.create(serializer.validated_data)

        response = self.response_serializer_class(
            schedule,
            context={
                "request": request,
            },
        )

        return Response(data=response.data)
