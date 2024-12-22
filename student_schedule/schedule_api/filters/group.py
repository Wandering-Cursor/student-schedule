import django_filters
from schedule_admin.models.group import Group


class GroupFilter(django_filters.FilterSet):
    specialty = django_filters.UUIDFilter(
        field_name="specialty__uuid",
    )
    name = django_filters.CharFilter(
        lookup_expr="icontains",
    )

    class Meta:
        model = Group
        fields = ["specialty", "name"]
