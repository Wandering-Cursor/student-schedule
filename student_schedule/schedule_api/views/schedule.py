from django import forms
from django.shortcuts import render
from django.utils.translation import gettext_lazy as _
from django.views.generic import TemplateView
from django_filters import rest_framework as filters
from rest_framework import mixins, permissions, viewsets
from schedule_admin.models.group_schedule import GroupSchedule
from schedule_admin.models.photo_schedule import PhotoSchedule
from schedule_admin.models.schedule import Schedule
from schedule_api.filters.schedule import ScheduleFilter
from schedule_api.serializers.group_schedule import GroupScheduleSerializer
from schedule_api.serializers.photo_schedule import PhotoScheduleSerializer
from schedule_api.serializers.schedule import (
    ScheduleSerializer,
    ScheduleUploadSerializer,
)


class ScheduleViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Allows to view Schedules of the organization
    """

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ScheduleFilter


class PhotoScheduleViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    Allows to view Schedules of the organization
    """

    queryset = PhotoSchedule.objects.all()
    serializer_class = PhotoScheduleSerializer
    permission_classes = [permissions.AllowAny]


class GroupScheduleViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    Allows to view Schedules of the organization
    """

    queryset = GroupSchedule.objects.all()
    serializer_class = GroupScheduleSerializer
    permission_classes = [permissions.AllowAny]


class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True


class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if isinstance(data, (list, tuple)):
            result = [single_file_clean(d, initial) for d in data]
        else:
            result = [single_file_clean(data, initial)]
        return result


class UploadScheduleForm(forms.Form):
    for_date = forms.DateField()

    photos = MultipleFileField(required=False)
    file = forms.FileField(required=False)

    def clean(self):
        previous = super().clean()

        if not previous.get("photos") and not previous.get("file"):
            raise forms.ValidationError(_("You must provide either photos or file"))


class UploadScheduleView(TemplateView):
    template_name = "schedule_admin/upload_schedule.html"
    success_template_name = "schedule_admin/upload_schedule_success.html"

    def _return_error(self, request, errors):
        return render(
            request,
            self.template_name,
            {
                "errors": errors,
            },
        )

    def post(self, request, *args, **kwargs):
        form = UploadScheduleForm(request.POST, request.FILES)
        if not form.is_valid():
            return self._return_error(request, form.errors)

        serializer = ScheduleUploadSerializer(
            data={
                "for_date": form.cleaned_data["for_date"],
                "photos": form.cleaned_data.get("photos"),
                "file": form.cleaned_data.get("file"),
            }
        )
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            return self._return_error(request, e)
        serializer.save()

        return render(
            request=request,
            template_name=self.success_template_name,
        )
