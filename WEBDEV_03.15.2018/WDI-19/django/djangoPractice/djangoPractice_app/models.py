from django.db import models

class Banana(models.Model):
    color = models.TextField()
    name = models.TextField()

    def __str__(self):
        return self.name