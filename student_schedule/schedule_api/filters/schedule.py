import django_filters
from schedule_admin.models.schedule import Schedule


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
