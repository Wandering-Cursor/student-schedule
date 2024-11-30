from rest_framework import serializers
from schedule_admin.models.specialty import Specialty


class SpecialtySerializer(serializers.HyperlinkedModelSerializer):
    groups = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name="group-detail",
    )

    class Meta:
        model = Specialty
        fields = [
            "uuid",
            "name",
            "full_name",
            "groups",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["uuid", "created_at", "updated_at"]
