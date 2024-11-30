from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.teacher import Teacher


@admin.register(Teacher)
class TeacherAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Teacher"),
            {
                "fields": [
                    "first_name",
                    "last_name",
                    "middle_name",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "last_name",
        "first_name",
        "middle_name",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]

    FIRST_FIELD_PADDING = BaseAdmin.FIRST_FIELD_PADDING + 3
