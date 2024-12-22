from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from schedule_admin.models import User


class UserAdmin(BaseUserAdmin):
    fieldsets = (
        *BaseUserAdmin.fieldsets,
        (
            "Group",
            {"fields": ("related_group",)},
        ),
    )


admin.site.register(User, UserAdmin)
