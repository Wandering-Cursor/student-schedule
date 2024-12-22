import django_filters
from schedule_admin.models.teacher import Teacher


class TeacherFilter(django_filters.FilterSet):
    first_name = django_filters.CharFilter(
        lookup_expr="icontains",
    )
    last_name = django_filters.CharFilter(
        lookup_expr="icontains",
    )
    middle_name = django_filters.CharFilter(
        lookup_expr="icontains",
    )

    class Meta:
        model = Teacher
        fields = ["first_name", "last_name", "middle_name"]
