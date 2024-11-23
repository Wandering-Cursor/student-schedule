from .base import *  # noqa: F403

DEBUG = False

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

LOGGING["handlers"]["console"]["level"] = "WARNING"
