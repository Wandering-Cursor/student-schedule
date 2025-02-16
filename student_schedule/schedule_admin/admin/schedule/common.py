from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.schedule.schedule import Schedule


@admin.register(Schedule)
class CommonScheduleAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Schedule"),
            {
                "fields": [
                    "for_date",
                    "photo_schedule",
                    "group_schedules",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "for_date",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]
    filter_vertical = [
        "group_schedules",
    ]

    FIRST_FIELD_PADDING = BaseAdmin.FIRST_FIELD_PADDING + 1

    ordering = [
        "for_date",
        *BaseAdmin.ordering,
    ]
