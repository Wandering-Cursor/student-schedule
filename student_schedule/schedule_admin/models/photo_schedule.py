from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class PhotoSchedulePhoto(BaseModel):
    file = models.FileField(
        verbose_name=_("File"),
        upload_to="schedule/photos/",
    )


class PhotoSchedule(BaseModel):
    photos = models.ManyToManyField(
        PhotoSchedulePhoto,
        verbose_name=_("Photos"),
        related_name="photo_schedule_photos",
    )
