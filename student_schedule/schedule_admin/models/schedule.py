import datetime
import typing

from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel

if typing.TYPE_CHECKING:
    from student_schedule.schedule_admin.models.photo_schedule import PhotoSchedule


def get_tomorrow() -> "datetime.date":
    return timezone.now().date() + timezone.timedelta(days=1)


class Schedule(BaseModel):
    for_date = models.DateField(
        verbose_name=_("For Date"),
        default=get_tomorrow,
    )

    photo_schedules: models.QuerySet["PhotoSchedule"] = models.ManyToManyField(
        "schedule_admin.PhotoSchedule",
        related_name="schedules",
        verbose_name=_("Photo Schedules"),
        blank=True,
    )
