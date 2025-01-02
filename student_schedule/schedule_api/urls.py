import schedule_api.views.schedule.common
import schedule_api.views.schedule.group
import schedule_api.views.schedule.photo
import schedule_api.views.schedule.upload
from django.urls import include, path
from knox.views import LogoutAllView, LogoutView
from rest_framework import routers
from schedule_api import views
from schedule_api.schemas.knox import KnoxTokenScheme
from schedule_api.views.auth import LoginView

router = routers.DefaultRouter()
router.register(
    r"org/specialty",
    views.SpecialtyViewSet,
)
router.register(
    r"org/group",
    views.GroupViewSet,
)
router.register(
    r"org/teacher",
    views.TeacherViewSet,
)
router.register(
    r"schedule/schedule",
    schedule_api.views.schedule.common.ScheduleViewSet,
)
router.register(
    r"schedule/photo",
    schedule_api.views.schedule.photo.PhotoScheduleViewSet,
)
router.register(
    r"schedule/group",
    schedule_api.views.schedule.group.GroupScheduleViewSet,
)
router.register(
    r"info_page/page",
    views.InfoPageViewSet,
)
router.register(
    r"info_page/tag",
    views.TagViewSet,
)


urlpatterns = [
    path(
        "",
        include(router.urls),
    ),
    path(
        "admin/schedule/",
        view=schedule_api.views.schedule.upload.UploadScheduleAPIView.as_view(),
        name="upload_schedule_api",
    ),
    path(
        "auth/login/",
        LoginView.as_view(),
        name="knox_login",
    ),
    path(
        "auth/logout/",
        LogoutView.as_view(),
        name="knox_logout",
    ),
    path(
        "auth/logoutall/",
        LogoutAllView.as_view(),
        name="knox_logoutall",
    ),
    path(
        "auth/info/",
        views.auth.UserInfoView.as_view(),
        name="user_info",
    ),
]

__all__ = ["KnoxTokenScheme"]
