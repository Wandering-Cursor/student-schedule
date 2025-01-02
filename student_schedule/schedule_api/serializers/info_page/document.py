from rest_framework import serializers
from schedule_admin.models.info_pages.documents import Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
