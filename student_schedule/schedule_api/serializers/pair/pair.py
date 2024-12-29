from rest_framework import serializers
from schedule_admin.models.schedule.pairs import Pair


class PairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pair
        fields = ["name", "start_time", "end_time"]
        read_only_fields = ["name", "start_time", "end_time"]
