from datetime import time

from schedule_api.schemas.base import Schema


class TeacherLesson(Schema):
    pair: str

    start_time: time
    end_time: time

    room: str

    group_name: str


class ScheduleForTeacher(Schema):
    first_name: str
    last_name: str
    middle_name: str | None = None

    lessons: list[TeacherLesson]


class TeacherSchedule(Schema):
    teachers: list[ScheduleForTeacher]
