from .base import *  # noqa: F403

DEBUG = False

SECURE_SSL_REDIRECT = True
USE_X_FORWARDED_HOST = True
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

LOGGING["handlers"]["console"]["level"] = "WARNING"  # noqa: F405
ALLOWED_HOSTS = settings.allowed_hosts
CORS_ALLOWED_ORIGINS = settings.allowed_cors_origins
CSRF_TRUSTED_ORIGINS = settings.trusted_origins

STATIC_URL = "/schedule/static/"
MEDIA_URL = "/schedule/media/"

STATIC_ROOT = "/app/static/"
MEDIA_ROOT = "/app/media/"
