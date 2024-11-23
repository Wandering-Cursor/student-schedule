from django.contrib import admin
from django.utils.translation import gettext_lazy as _


class BaseAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            _("Generic"),
            {
                "fields": [
                    "uuid",
                    "created_at",
                    "updated_at",
                ],
            },
        ),
    ]

    list_display = [
        "uuid",
        "created_at",
        "updated_at",
    ]

    # So we can show UUID first
    FIRST_FIELD_PADDING = 1
    # So we can show Created/Updated At last
    LAST_FIELD_PADDING = -2

    ordering = [
        "created_at",
    ]

    readonly_fields = [
        "uuid",
        "created_at",
        "updated_at",
    ]


class BaseTabularInline(admin.TabularInline):
    extra = 0
    show_change_link = True
    show_full_result_count = True
