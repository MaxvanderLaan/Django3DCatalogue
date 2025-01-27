from django.db import models

class Model3D(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()
    thumbnail = models.URLField()
    description = models.TextField()
    triangles = models.IntegerField()

def __str__(self):
    return self.name