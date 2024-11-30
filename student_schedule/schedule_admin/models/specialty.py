from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class Specialty(BaseModel):
    name = models.CharField(
        max_length=255,
        verbose_name=_("Name"),
    )
    full_name = models.CharField(
        max_length=512,
        verbose_name=_("Full Name"),
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = _("Specialty")
        verbose_name_plural = _("Specialties")
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "name",
                ],
                name="unique_specialty",
            )
        ]
        ordering = [
            "name",
        ]
