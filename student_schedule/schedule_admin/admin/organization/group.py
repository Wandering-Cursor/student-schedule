from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from schedule_admin.admin.base import BaseAdmin
from schedule_admin.models.group import Group


@admin.action(description=_("Create user for group"))
def create_user_for_group(modeladmin, request, queryset):
    for group in queryset:
        group.create_user()


@admin.register(Group)
class GroupAdmin(BaseAdmin):
    fieldsets = [
        *BaseAdmin.fieldsets,
        (
            _("Group"),
            {
                "fields": [
                    "specialty",
                    "name",
                ]
            },
        ),
    ]

    list_display = [
        *BaseAdmin.list_display[: BaseAdmin.FIRST_FIELD_PADDING],
        "specialty",
        "name",
        *BaseAdmin.list_display[BaseAdmin.LAST_FIELD_PADDING :],
    ]

    FIRST_FIELD_PADDING = BaseAdmin.FIRST_FIELD_PADDING + 2

    actions = [
        create_user_for_group,
    ]
