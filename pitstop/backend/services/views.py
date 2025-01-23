from rest_framework.viewsets import ModelViewSet
from .models import Service
from .serializers import ServiceSerializer

class ServiceViewSet(ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
