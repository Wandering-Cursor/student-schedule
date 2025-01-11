from .auth import LoginView
from .group import GroupViewSet
from .info_page import InfoPageViewSet, TagViewSet
from .schedule.common import ScheduleViewSet, WeekScheduleForGroupViewSet
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
    "InfoPageViewSet",
    "TagViewSet",
    "WeekScheduleForGroupViewSet",
]
