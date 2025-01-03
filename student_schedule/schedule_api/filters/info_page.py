import django_filters
from schedule_admin.models.info_pages.info_pages import InfoPage
from schedule_admin.models.info_pages.tags import Tag


class InfoPageFilter(django_filters.FilterSet):
    tags = django_filters.ModelChoiceFilter(
        to_field_name="uuid",
        queryset=Tag.objects.all(),
    )
    title = django_filters.CharFilter(
        lookup_expr="icontains",
    )

    class Meta:
        model = InfoPage
        fields = ["title", "tags"]
