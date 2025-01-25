import datetime
import typing

from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel

if typing.TYPE_CHECKING:
    from schedule_admin.models.schedule.photo import SchedulePhoto
    from schedule_admin.models.schedule.schedule import Schedule


def get_tomorrow() -> "datetime.date":
    return timezone.now().date() + timezone.timedelta(days=1)


class TeacherSchedule(BaseModel):
    """This entity represents a schedule for teachers for a date"""

    for_date = models.DateField(
        verbose_name=_("For Date"),
        default=get_tomorrow,
    )

    photos: "models.Manager[SchedulePhoto]" = models.ManyToManyField(
        "schedule_admin.SchedulePhoto",
        verbose_name=_("Photos"),
        related_name="teacher_schedule_photos",
        blank=True,
    )
    student_schedule: "Schedule | None" = models.ForeignKey(
        "schedule_admin.Schedule",
        on_delete=models.SET_NULL,
        verbose_name=_("Student Schedule"),
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return f"{_('Teacher Schedule for')} {self.for_date}"

    class Meta:
        verbose_name = _("Teacher Schedule")
        verbose_name_plural = _("Teacher Schedules")
        ordering = ["-for_date"]
        get_latest_by = "for_date"
