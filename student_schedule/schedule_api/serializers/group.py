from rest_framework import serializers
from schedule_admin.models.group import Group
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.specialty import ShortSpecialtySerializer


class GroupSerializer(HyperlinkedUUIDSerializer):
    specialty = ShortSpecialtySerializer()

    class Meta:
        model = Group
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class ShortGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["uuid", "url", "name"]
        read_only_fields = ["uuid", "url", "name"]
