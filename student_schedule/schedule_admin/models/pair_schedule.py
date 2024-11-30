from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class PairNames(models.TextChoices):
    FIRST = "1", _("First")
    SECOND = "2", _("Second")
    THIRD = "3", _("Third")
    FOURTH = "4", _("Fourth")
    FIFTH = "5", _("Fifth")
    SIXTH = "6", _("Sixth")

    ZEROTH = "0", _("Zeroth")
    CONSULTATION = "C", _("Consultation")
    CUSTOM = "X", _("Custom")


class Pair(BaseModel):
    name = models.CharField(
        verbose_name=_("Name"),
        max_length=255,
        choices=PairNames.choices,
    )

    start_time = models.TimeField(
        verbose_name=_("Start Time"),
        blank=True,
        null=True,
    )
    end_time = models.TimeField(
        verbose_name=_("End Time"),
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return f"{self.name} {self.start_time} - {self.end_time}"

    class Meta:
        verbose_name = _("Pair")
        verbose_name_plural = _("Pairs")
        ordering = ["start_time"]
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "name",
                ],
                name="unique_pair",
            )
        ]
