from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class Teacher(BaseModel):
    first_name = models.CharField(
        max_length=255,
        verbose_name=_("First Name"),
    )
    last_name = models.CharField(
        max_length=255,
        verbose_name=_("Last Name"),
    )
    middle_name = models.CharField(
        max_length=255,
        verbose_name=_("Middle Name"),
        blank=True,
        null=True,
    )

    @property
    def name(self) -> str:
        return f"{self.last_name} {self.first_name} {self.middle_name}"

    @property
    def short_name(self) -> str:
        return f"{self.last_name} {self.first_name[:1]}. {self.middle_name[:1]}."

    def __str__(self) -> str:
        return self.short_name

    class Meta:
        verbose_name = _("Teacher")
        verbose_name_plural = _("Teachers")
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "first_name",
                    "last_name",
                    "middle_name",
                ],
                name="unique_teacher",
            )
        ]
        ordering = [
            "last_name",
            "first_name",
        ]
