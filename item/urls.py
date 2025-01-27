from django.urls import path
from . import views

urlpatterns = [
    path('<int:model3d_id>/', views.item, name='item'),
]