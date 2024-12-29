from knox.auth import TokenAuthentication
from rest_framework import permissions
from rest_framework.views import APIView


class AuthenticatedView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
