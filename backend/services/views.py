# services/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Service
from .serializers import ServiceSerializer

@api_view(['GET'])
def service_list(request):
    services = Service.objects.prefetch_related('images').order_by('order')
    serializer = ServiceSerializer(services, many=True, context={'request': request})
    return Response(serializer.data)