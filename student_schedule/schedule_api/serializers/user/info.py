from rest_framework import serializers
from rest_framework.request import Request
from schedule_admin.models import User
from schedule_api.serializers.group.short import ShortGroupSerializer


class UserInfoResponseSerializer(serializers.Serializer):
    username = serializers.CharField()

    is_staff = serializers.BooleanField()

    first_name = serializers.CharField(
        allow_blank=True,
    )
    last_name = serializers.CharField(
        allow_blank=True,
    )

    related_group = ShortGroupSerializer(
        allow_null=True,
    )


class UserInfoSerializer(serializers.Serializer):
    def validate(self, attrs):
        request = self.context.get("request", None)

        if request is None:
            raise serializers.ValidationError("Request is required")

        if not isinstance(request, Request):
            raise serializers.ValidationError("Request is not a Request instance")

        assert isinstance(request.user, User)

        if not request.user.is_authenticated:
            raise serializers.ValidationError("User is not authenticated")

        return {
            "username": request.user.username,
            "is_staff": request.user.is_staff,
            "first_name": request.user.first_name,
            "last_name": request.user.last_name,
            "related_group": request.user.related_group,
        }
