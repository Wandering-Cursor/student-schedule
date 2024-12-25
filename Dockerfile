FROM python:3.12

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

ADD pyproject.toml uv.lock README.md /app/

WORKDIR /app

RUN uv sync --frozen

ADD . /app

RUN uv run --no-dev student_schedule/manage.py collectstatic --noinput

WORKDIR /app/student_schedule

ENTRYPOINT [ "uv", "run", "gunicorn", "student_schedule.wsgi" ]
