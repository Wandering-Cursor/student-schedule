from .base import *  # noqa: F403

DEBUG = False

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

LOGGING["handlers"]["console"]["level"] = "WARNING"  # noqa: F405

CORS_ALLOWED_ORIGINS = settings.allowed_hosts
CSRF_TRUSTED_ORIGINS = settings.trusted_origins
