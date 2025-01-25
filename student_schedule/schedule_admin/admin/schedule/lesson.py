from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.schedule.group import Lesson


@admin.register(Lesson)
class LessonAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Lesson"),
            {
                "fields": [
                    "pair",
                    "name",
                    "teacher",
                    "room",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "pair",
        "name",
        "teacher",
        "room",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]
