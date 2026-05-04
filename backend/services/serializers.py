# services/serializers.py
from rest_framework import serializers
from .models import Service, ServiceImage

class ServiceImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ServiceImage
        fields = ['image', 'alt_text']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None


class ServiceSerializer(serializers.ModelSerializer):
    images = ServiceImageSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = [
            'id', 
            'name', 
            'slug', 
            'icon', 
            'description', 
            'long_description', 
            'features', 
            'images'
        ]