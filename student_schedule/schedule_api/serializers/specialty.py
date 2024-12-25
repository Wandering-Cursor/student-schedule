from rest_framework import serializers
from schedule_admin.models.specialty import Specialty
from schedule_api.serializers.base import HyperlinkedUUIDSerializer


class SpecialtySerializer(HyperlinkedUUIDSerializer):
    groups = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name="group-detail",
    )

    class Meta:
        model = Specialty
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class ShortSpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialty
        fields = ["uuid", "url", "name"]
        read_only_fields = ["uuid", "url", "name"]
