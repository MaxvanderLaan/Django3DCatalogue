from django.shortcuts import get_object_or_404, render
from model3d.models import Model3D

def item(request, model3d_id):
    model3d = get_object_or_404(Model3D, pk=model3d_id)
    return render(request, 'item.html', {'model3d': model3d})
