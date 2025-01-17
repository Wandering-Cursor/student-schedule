from typing import Collection

from django.db import models
from django.forms import ValidationError
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class SchedulePhoto(BaseModel):
    """Entity representing a photography of a schedule"""

    ALLOWED_EXTENSIONS = [
        "apng",
        "avif",
        "bmp",
        "gif",
        "jfif",
        "jpeg",
        "jpg",
        "pjp",
        "pjpeg",
        "png",
        "svg",
        "tif",
        "tiff",
        "webp",
    ]

    # Consider using cloud storage
    # if needed: Google Cloud Storage, Amazon S3...
    file = models.FileField(
        verbose_name=_("File"),
        upload_to="schedule/photos/",
        max_length=255,
    )

    def clean_fields(self, exclude: Collection[str] | None) -> None:
        base = super().clean_fields(exclude)

        extension = self.file.name.split(".")[-1]
        if extension not in SchedulePhoto.ALLOWED_EXTENSIONS:
            raise ValidationError(
                {
                    "file": _("Invalid file supplied"),
                }
            )

        return base

    def __str__(self: "SchedulePhoto") -> str:
        return f"File: {self.file.name}"


class PhotoSchedule(BaseModel):
    """
    Entity representing a collection of photos of a schedule for some date
    """

    name = models.CharField(
        verbose_name=_("Name"),
        blank=True,
    )

    photos = models.ManyToManyField(
        SchedulePhoto,
        verbose_name=_("Photos"),
        related_name="photo_schedule_photos",
    )

    def __str__(self: "PhotoSchedule") -> str:
        return f"{_('Photo Schedule')}: '{self.name}' - {self.created_at.date()}"
