from schedule_admin.models.schedule.schedule import Schedule
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.schedule.group import ShortGroupScheduleInfo


class ScheduleSerializer(HyperlinkedUUIDSerializer):
    group_schedules = ShortGroupScheduleInfo(many=True)

    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
