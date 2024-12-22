import datetime
import typing

from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel

if typing.TYPE_CHECKING:
    from student_schedule.schedule_admin.models.group_schedule import GroupSchedule
    from student_schedule.schedule_admin.models.photo_schedule import PhotoSchedule


def get_tomorrow() -> "datetime.date":
    return timezone.now().date() + timezone.timedelta(days=1)


class Schedule(BaseModel):
    for_date = models.DateField(
        verbose_name=_("For Date"),
        default=get_tomorrow,
    )

    photo_schedules: "PhotoSchedule | None" = models.ForeignKey(
        "schedule_admin.PhotoSchedule",
        on_delete=models.DO_NOTHING,
        verbose_name=_("Photo Schedule"),
        blank=True,
        null=True,
    )
    group_schedules: "models.Manager[GroupSchedule] | None" = models.ManyToManyField(
        "schedule_admin.GroupSchedule",
        verbose_name=_("Group Schedules"),
        related_name="schedules",
        blank=True,
    )

    class Meta:
        verbose_name = _("Schedule")
        verbose_name_plural = _("Schedules")
        ordering = ["for_date"]
