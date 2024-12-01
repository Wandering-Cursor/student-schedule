from django.urls import include, path
from rest_framework import routers
from schedule_api import views

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
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
