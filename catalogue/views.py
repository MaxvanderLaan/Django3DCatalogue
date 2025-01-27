from django.shortcuts import render
from model3d.models import Model3D

def catalogue(request):

    model3dCollection = Model3D.objects.all()
    return render(request, "catalogue.html", {"model3dCollection": model3dCollection})