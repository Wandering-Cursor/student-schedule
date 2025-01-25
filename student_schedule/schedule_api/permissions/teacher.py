from rest_framework.permissions import IsAdminUser


class AllowTeacher(IsAdminUser):
    pass
