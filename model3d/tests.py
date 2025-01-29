from django.test import TestCase
from model3d.models import Model3D


class TestModel3D(TestCase):

    # Special Setup class, use it to instantiate objects for further testing
    # refrence them by using self.objectname

    def setUp(self):
        self.model3D = Model3D(
            name="Vase",
            url="http://192.168.178.108:8000/Vase.glb",
            thumbnail="http://192.168.178.108:8000/Vase.png",
            description="This elegantly designed 3D vase is a perfect blend of modern aesthetics and timeless sophistication. Crafted with intricate detail, its smooth curves and sleek lines create a striking visual impact, making it an ideal centerpiece for any room. Whether displayed on a mantel, coffee table, or as part of a curated collection, this vase offers a unique touch of style and elegance to elevate your home decor. Ideal for fresh flowers or as a standalone sculptural piece.",
            triangles=1212,
        )

    def test_stringify(self):
        self.assertEqual(str(self.model3D), "Vase")

    def test_triangles_is_integer(self):
        self.assertIsInstance(self.model3D.triangles, int)
