from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class Tag(BaseModel):
    name = models.CharField(
        max_length=64,
        verbose_name=_("Name"),
    )
    color = models.CharField(
        max_length=7,
        verbose_name=_("Color"),
        help_text=_("HEX color code\nExample: #d48804"),
    )

    def __str__(self: "Tag") -> str:
        return self.name

    class Meta:
        verbose_name = _("Tag")
        verbose_name_plural = _("Tags")
        ordering = [
            "created_at",
        ]
        get_latest_by = "created_at"
