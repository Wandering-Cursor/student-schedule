from django.contrib.auth import login
from drf_spectacular.utils import extend_schema
from knox.auth import TokenAuthentication
from knox.views import LoginView as KnoxLoginView
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from schedule_api.serializers.user.info import (
    UserInfoResponseSerializer,
    UserInfoSerializer,
)


class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AuthTokenSerializer

    def post(self, request: "Request", format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return super().post(request, format=None)


class UserInfoView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    serializer_class = UserInfoSerializer
    output_serializer_class = UserInfoResponseSerializer

    @extend_schema(
        responses={
            200: UserInfoResponseSerializer,
        }
    )
    def get(self, request: "Request"):
        input_serializer = self.serializer_class(
            data={},
            context={
                "request": request,
                "view": self,
            },
        )
        input_serializer.is_valid(raise_exception=True)

        return Response(
            UserInfoResponseSerializer(
                input_serializer.validated_data,
            ).data,
        )
