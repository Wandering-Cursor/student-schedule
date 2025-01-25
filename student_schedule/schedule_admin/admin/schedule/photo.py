from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.schedule.photo import PhotoSchedule, SchedulePhoto


@admin.register(PhotoSchedule)
class ScheduleFromPhotos(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Photographic Schedule"),
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
class PhotoStorageAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Photos for Schedule"),
            {
                "fields": [
                    "file",
                ]
            },
        ),
    ]
