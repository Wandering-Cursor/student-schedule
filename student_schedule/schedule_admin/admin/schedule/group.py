from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.schedule.group import GroupSchedule


@admin.register(GroupSchedule)
class GroupScheduleAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Group Schedule"),
            {
                "fields": [
                    "group",
                    "for_date",
                    "lessons",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "group",
        "for_date",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]

    filter_vertical = [
        "lessons",
    ]
