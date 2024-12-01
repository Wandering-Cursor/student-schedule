from .group import GroupViewSet
from .schedule import (
    GroupScheduleViewSet,
    PhotoScheduleViewSet,
    ScheduleViewSet,
    UploadScheduleView,
)
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
]
