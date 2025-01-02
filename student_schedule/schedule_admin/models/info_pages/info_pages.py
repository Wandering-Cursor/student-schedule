from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel
from schedule_admin.models.info_pages.documents import Document
from schedule_admin.models.info_pages.tags import Tag


class InfoPage(BaseModel):
    title = models.CharField(
        max_length=512,
        verbose_name=_("Title"),
    )

    content = models.TextField(
        verbose_name=_("Content"),
    )

    tags: "models.QuerySet[Tag]" = models.ManyToManyField(
        Tag,
        verbose_name=_("Tags"),
        related_name="info_pages",
    )
    related_files: "models.QuerySet[Document]" = models.ManyToManyField(
        Document,
        verbose_name=_("Related files"),
        related_name="info_pages",
    )

    def __str__(self: "InfoPage") -> str:
        return self.title

    class Meta:
        verbose_name = _("Info page")
        verbose_name_plural = _("Info pages")
        ordering = [
            "created_at",
        ]
        get_latest_by = "created_at"
