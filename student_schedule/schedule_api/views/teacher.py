from django_filters import rest_framework as filters
from rest_framework import permissions, viewsets
from schedule_admin.models.teacher import Teacher
from schedule_api.filters.teacher import TeacherFilter
from schedule_api.serializers.teacher import TeacherSerializer


class TeacherViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Teachers
    """

    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TeacherFilter
