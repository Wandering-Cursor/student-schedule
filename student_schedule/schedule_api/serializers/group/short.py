from rest_framework import serializers
from schedule_admin.models.group import Group


class ShortGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["uuid", "url", "name"]
        read_only_fields = ["uuid", "url", "name"]
