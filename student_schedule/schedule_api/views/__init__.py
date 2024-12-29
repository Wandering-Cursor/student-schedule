from .auth import LoginView
from .group import GroupViewSet
from .schedule.common import ScheduleViewSet
from .schedule.group import GroupScheduleViewSet
from .schedule.photo import PhotoScheduleViewSet
from .specialty import SpecialtyViewSet
from .teacher import TeacherViewSet

__all__ = [
    "GroupViewSet",
    "GroupScheduleViewSet",
    "PhotoScheduleViewSet",
    "ScheduleViewSet",
    "SpecialtyViewSet",
    "TeacherViewSet",
    "UploadScheduleView",
    "LoginView",
]
