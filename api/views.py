from rest_framework.response import Response
from rest_framework.decorators import api_view
from model3d.models import Model3D
from .serializers import Model3DSerializer

@api_view(["GET"])
def getData(request):
    model3dCollection = Model3D.objects.all()
    serializer = Model3DSerializer(model3dCollection, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def addModel3d(request):
    serializer = Model3DSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)