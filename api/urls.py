from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData, name='api'),
    path('add/', views.addModel3d, name='add')
]