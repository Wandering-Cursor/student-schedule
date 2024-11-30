from rest_framework import serializers
from schedule_admin.models.group import Group


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
