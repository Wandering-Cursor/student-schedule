from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class Document(BaseModel):
    file = models.FileField(
        verbose_name=_("File"),
        upload_to="info_pages/documents/",
        max_length=255,
    )

    def __str__(self: "Document") -> str:
        return f"File: {self.file.name}"

    class Meta:
        verbose_name = _("Document")
        verbose_name_plural = _("Documents")
        ordering = [
            "created_at",
        ]
        get_latest_by = "created_at"
