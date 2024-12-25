from typing import Annotated, Callable

import pydantic
from pydantic_settings import BaseSettings, SettingsConfigDict


def convert_string_to_list(v: str | list) -> Callable[..., list[str]]:
    if not v:
        return []
    if isinstance(v, list):
        return v
    return [item.strip() for item in v.split(",")]


StringListValidator = Annotated[
    list[str] | str, pydantic.BeforeValidator(convert_string_to_list)
]


class Settings(BaseSettings):
    debug: bool = False
    timezone: str = "UTC"

    default_admin_username: str = "admin"
    default_admin_password: str = "i9G6QDF8MoGW"

    secret_key: str = pydantic.Field(
        default="O2k7vQEhqp5BhfMtIsTfTjHngcCJyITodacfPjBapaE",
        description='Generate using: `uv run python -c "import secrets; print(secrets.token_urlsafe(32))"`',
    )
    allowed_hosts: StringListValidator = ["*"]
    trusted_origins: StringListValidator = ["*"]

    database_url: pydantic.AnyUrl = pydantic.Field(
        default="postgresql://postgres:password@database:5432/DevDB",
        description="It's mandatory to use a `postgresql:// URL",
    )

    model_config = SettingsConfigDict(
        env_file=(
            ".env",
            "/run/secrets/env_file",
        ),
        extra="ignore",
    )


settings = Settings()
