from django.urls import include, path
from knox.views import LogoutAllView, LogoutView
from rest_framework import routers
from schedule_api import views
from schedule_api.schemas.knox import KnoxTokenScheme
from schedule_api.views.auth import LoginView

router = routers.DefaultRouter()
router.register(r"org/specialty", views.SpecialtyViewSet)
router.register(r"org/group", views.GroupViewSet)
router.register(r"org/teacher", views.TeacherViewSet)
router.register(r"schedule", views.ScheduleViewSet)
router.register(r"photo_schedule", views.PhotoScheduleViewSet)
router.register(r"group_schedule", views.GroupScheduleViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path(
        "admin/schedule/",
        view=views.UploadScheduleView.as_view(),
        name="upload_schedule",
    ),
    path("auth/login/", LoginView.as_view(), name="knox_login"),
    path("auth/logout/", LogoutView.as_view(), name="knox_logout"),
    path(
        "auth/logoutall/",
        LogoutAllView.as_view(),
        name="knox_logoutall",
    ),
]

__all__ = ["KnoxTokenScheme"]
