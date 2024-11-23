import pydantic
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    debug: bool = False
    timezone: str = "UTC"

    default_admin_username: str = "admin"
    default_admin_password: str = "i9G6QDF8MoGW"

    secret_key: str = pydantic.Field(
        default="O2k7vQEhqp5BhfMtIsTfTjHngcCJyITodacfPjBapaE",
        description='Generate using: `uv run python -c "import secrets; print(secrets.token_urlsafe(32))"`',
    )
    allowed_hosts: list[str] = ["*"]

    database_url: pydantic.AnyUrl = pydantic.Field(
        default="postgresql://postgres:password@database:5432/DevDB",
        description="It's mandatory to use a `postgresql:// URL",
    )


settings = Settings()
