from django.db import models
from django.utils.translation import gettext_lazy as _
from schedule_admin.models.base import BaseModel


class Group(BaseModel):
    specialty = models.ForeignKey(
        "schedule_admin.Specialty",
        on_delete=models.PROTECT,
        verbose_name=_("Specialty"),
        related_name="groups",
    )

    name = models.CharField(
        max_length=255,
        verbose_name=_("Name"),
    )

    def create_user(self: "Group") -> None:
        from schedule_admin.models import User

        user = User.objects.create(
            username=self.name,
            related_group=self,
        )
        user.set_password(self.name)
        user.save()

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = _("Group")
        verbose_name_plural = _("Groups")
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "specialty",
                    "name",
                ],
                name="unique_group",
            )
        ]
        ordering = [
            "specialty",
            "name",
        ]
