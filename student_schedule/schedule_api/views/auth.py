from django.contrib.auth import login
from knox.views import LoginView as KnoxLoginView
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer


class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AuthTokenSerializer

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return super().post(request, format=None)
