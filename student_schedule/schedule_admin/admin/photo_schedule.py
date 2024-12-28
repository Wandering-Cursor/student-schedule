from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.schedule.photo import PhotoSchedule, SchedulePhoto


@admin.register(PhotoSchedule)
class PhotoScheduleAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Photo Schedule"),
            {
                "fields": [
                    "name",
                    "photos",
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


@admin.register(SchedulePhoto)
class PhotoSchedulePhotoAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Photo Schedule Photo"),
            {
                "fields": [
                    "file",
                ]
            },
        ),
    ]
