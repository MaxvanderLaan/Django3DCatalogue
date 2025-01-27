# Django3DCatalogue
 
## Notes:

## Commands:
**create new project with:**
django-admin startproject [project name]

**host local server**
python manage.py runserver

**create new app**
python manage.py startapp main

**create migrations**
python manage.py makemigrations
*If models arent being detected, don't forget to add app to the INSTALLED_APPS in the settings.py*

**add migrations**
python manage.py migrate

**Open up ORM shell**
python manage.py shell
from model3d.models import Model3D

new_model = Model3D(
    name="model 1",
    url="/static/models/SnakeGrass.glb",
	thumbnail="/static/models/TestImage.png",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis interdum est, non placerat turpis. Nunc a pharetra mi, nec maximus nunc. Suspendisse scelerisque eget lectus non posuere.",
    triangles=2000
)

new_model.save()

**create admin account**
python manage.py createsuperuser
admin // admin@example.com // Password