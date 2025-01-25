from .base import *  # noqa: F403
from .base import LOGGING, SPECTACULAR_SETTINGS, settings

DEBUG = False

SECURE_SSL_REDIRECT = True
USE_X_FORWARDED_HOST = True
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

LOGGING["handlers"]["console"]["level"] = "WARNING"
ALLOWED_HOSTS = settings.allowed_hosts
CSRF_TRUSTED_ORIGINS = settings.trusted_origins
CORS_ALLOW_ALL_ORIGINS = True

STATIC_URL = "/schedule/static/"
MEDIA_URL = "/schedule/media/"

STATIC_ROOT = "/app/static/"
MEDIA_ROOT = "/app/media/"

# Because of how the server is configured, we need to set a prefix for the schema
SPECTACULAR_SETTINGS["SCHEMA_PATH_PREFIX_INSERT"] = "/schedule"
