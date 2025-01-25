"""Admin page for Teacher Schedule."""

from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.teacher.schedule import TeacherSchedule


@admin.register(TeacherSchedule)
class CommonScheduleAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Teacher Schedule"),
            {
                "fields": [
                    "for_date",
                    "photos",
                    "student_schedule",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "for_date",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]

    FIRST_FIELD_PADDING = BaseAdmin.FIRST_FIELD_PADDING + 1

    ordering = [
        "for_date",
        *BaseAdmin.ordering,
    ]
