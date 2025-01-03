import django_filters
from schedule_admin.models.info_pages.tags import Tag


class TagFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(
        lookup_expr="icontains",
    )

    class Meta:
        model = Tag
        fields = [
            "name",
        ]
