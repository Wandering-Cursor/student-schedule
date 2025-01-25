import django_filters
from schedule_admin.models.schedule.schedule import Schedule
from schedule_admin.models.teacher.schedule import TeacherSchedule


class ScheduleFilter(django_filters.FilterSet):
    date__gte = django_filters.DateFilter(
        field_name="for_date",
        lookup_expr="gte",
    )
    date__lte = django_filters.DateFilter(
        field_name="for_date",
        lookup_expr="lte",
    )

    class Meta:
        model = Schedule
        fields = ["for_date"]


class TeacherScheduleFilter(ScheduleFilter):
    class Meta:
        model = TeacherSchedule
        fields = ["for_date"]


class WeekScheduleForGroupFilter(django_filters.FilterSet):
    group = django_filters.UUIDFilter(
        field_name="group_schedules__group",
    )

    class Meta:
        model = Schedule
        fields = ["group"]
