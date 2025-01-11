from copy import deepcopy

from schedule_admin.models.schedule.schedule import Schedule
from schedule_api.serializers.base import HyperlinkedUUIDSerializer
from schedule_api.serializers.schedule.group import ShortGroupScheduleInfo


class ScheduleSerializer(HyperlinkedUUIDSerializer):
    group_schedules = ShortGroupScheduleInfo(many=True)

    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]


class WeekScheduleForGroupSerializer(HyperlinkedUUIDSerializer):
    group_schedules = ShortGroupScheduleInfo(many=True)

    def __filter_group_schedules(self, group: str, value: dict) -> dict:
        filtered_schedules = []
        schedules = deepcopy(value.get("group_schedules", []))

        for schedule in schedules:
            if schedule["group"]["uuid"] != group:
                continue
            filtered_schedules.append(schedule)
        value["group_schedules"] = filtered_schedules

        return value

    def to_representation(self, instance):
        value = super().to_representation(instance)

        context = self.context
        group = context.get("group", None)

        if group is not None:
            value = self.__filter_group_schedules(str(group), value)

        return value

    class Meta:
        model = Schedule
        fields = "__all__"
        read_only_fields = ["uuid", "created_at", "updated_at"]
