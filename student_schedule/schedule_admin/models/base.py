import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _


class BaseModel(models.Model):
    uuid = models.UUIDField(
        verbose_name=_("ID"),
        primary_key=True,
        # Replace to uuid7 in the future, if possible :)
        default=uuid.uuid4,
    )

    created_at = models.DateTimeField(
        verbose_name=_("Created At"),
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        verbose_name=_("Updated At"),
        auto_now=True,
    )

    class Meta:
        abstract = True
