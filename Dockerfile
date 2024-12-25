FROM python:3.12

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

ADD pyproject.toml uv.lock README.md /app/

WORKDIR /app

RUN uv sync --frozen

WORKDIR /app/student_schedule

ENTRYPOINT [ "gunicorn", "student_schedule.wsgi" ]
