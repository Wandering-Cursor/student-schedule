#!/bin/bash

uv run manage.py migrate

uv run gunicorn student_schedule.wsgi -b 0.0.0.0 --env SCRIPT_NAME=/schedule