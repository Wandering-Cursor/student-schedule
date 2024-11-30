from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.group_schedule import GroupSchedule, ScheduledPair


@admin.register(ScheduledPair)
class ScheduledPairAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Scheduled Pair"),
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
                    "scheduled_pairs",
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
        "scheduled_pairs",
    ]
