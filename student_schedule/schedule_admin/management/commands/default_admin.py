from typing import Any

from django.core.management.base import BaseCommand
from schedule_admin.models import User

from student_schedule.settings import settings


class Command(BaseCommand):
    help = "Creates default admin user (superuser) for use in the app"

    def handle(self, *args: Any, **options: Any) -> str | None:
        username = settings.default_admin_username

        if User.objects.filter(username=username).exists():
            self.stdout.write(
                "Default admin already exists",
                style_func=self.style.NOTICE,
            )
            return

        user = User.objects.create_superuser(
            username=username,
            email=f"{username}@mail.com",
            password=settings.default_admin_password,
        )

        self.stdout.write(
            f"Created user with: {user.username}",
            style_func=self.style.SUCCESS,
        )
