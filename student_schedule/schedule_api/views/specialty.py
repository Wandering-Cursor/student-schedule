from rest_framework import permissions, viewsets
from schedule_admin.models.specialty import Specialty
from schedule_api.serializers.specialty import SpecialtySerializer


class SpecialtyViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Specialties of the organization
    """

    queryset = Specialty.objects.all()
    serializer_class = SpecialtySerializer
    permission_classes = [permissions.AllowAny]
