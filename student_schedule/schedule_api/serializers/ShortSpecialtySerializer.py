from rest_framework import serializers
from schedule_admin.models.specialty import Specialty


class ShortSpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialty
        fields = ["uuid", "url", "name"]
        read_only_fields = ["uuid", "url", "name"]
