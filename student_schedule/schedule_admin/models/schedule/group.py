import typing

from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel

if typing.TYPE_CHECKING:
    from schedule_admin.models.schedule.pairs import Pair


class Lesson(BaseModel):
    pair: "Pair" = models.ForeignKey(
        "schedule_admin.Pair",
        on_delete=models.PROTECT,
        verbose_name=_("Pair"),
    )

    name = models.CharField(
        max_length=255,
        verbose_name=_("Name"),
    )
    teacher = models.ForeignKey(
        "schedule_admin.Teacher",
        on_delete=models.PROTECT,
        verbose_name=_("Teacher"),
    )
    room = models.CharField(
        max_length=255,
        verbose_name=_("Room"),
    )

    def __str__(self) -> str:
        return f"{self.pair.name}. {self.name} ({self.room}) - {self.teacher}"

    class Meta:
        verbose_name = _("Lesson")
        verbose_name_plural = _("Lessons")
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "pair",
                    "name",
                    "teacher",
                    "room",
                ],
                name="unique_lesson",
            )
        ]
        ordering = [
            "pair",
            "teacher",
            "room",
            "name",
        ]


class GroupSchedule(BaseModel):
    group = models.ForeignKey(
        "schedule_admin.Group",
        on_delete=models.PROTECT,
        verbose_name=_("Group"),
    )
    for_date = models.DateField(
        verbose_name=_("For Date"),
    )

    lessons = models.ManyToManyField(
        "schedule_admin.Lesson",
        verbose_name=_("Lessons"),
        blank=True,
    )

    def __str__(self) -> str:
        return f"{self.group} ({self.lessons.count()}) - {self.for_date}"

    class Meta:
        verbose_name = _("Group Schedule")
        verbose_name_plural = _("Group Schedules")
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "group",
                    "for_date",
                ],
                name="unique_group_schedule",
            )
        ]
        ordering = [
            "group",
        ]
