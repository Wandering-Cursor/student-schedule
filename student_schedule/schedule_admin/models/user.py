from django.contrib.auth.models import AbstractUser
from django.db import models
from schedule_admin.models.group import Group


class User(AbstractUser):
    related_group = models.ForeignKey(
        Group,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="users",
    )
