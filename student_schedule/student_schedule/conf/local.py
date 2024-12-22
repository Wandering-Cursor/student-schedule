from .base import *  # noqa: F403

DEBUG = True

LOGGING["handlers"]["console"]["level"] = "INFO"  # noqa: F405

CORS_ALLOW_ALL_ORIGINS = True
