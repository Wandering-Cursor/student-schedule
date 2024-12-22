from rest_framework import serializers


class HyperlinkedUUIDSerializer(serializers.HyperlinkedModelSerializer):
    uuid = serializers.UUIDField(read_only=True)
