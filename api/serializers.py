from rest_framework import serializers
from model3d.models import Model3D

class Model3DSerializer(serializers.ModelSerializer):
    class Meta:
        model = Model3D
        fields = '__all__'
