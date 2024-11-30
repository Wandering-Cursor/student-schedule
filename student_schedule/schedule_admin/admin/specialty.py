from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.specialty import Specialty


@admin.register(Specialty)
class SpecialtyAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Specialty"),
            {
                "fields": [
                    "name",
                    "full_name",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "name",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]

    FIRST_FIELD_PADDING = BaseAdmin.FIRST_FIELD_PADDING + 1
