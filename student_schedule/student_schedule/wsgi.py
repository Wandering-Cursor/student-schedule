"""
WSGI config for student_schedule project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from student_schedule.settings import settings


os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings.settings_module)

application = get_wsgi_application()
