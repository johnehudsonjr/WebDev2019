#models.py 
from django.db import models

class Meal(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=50)
    vegetarian = models.BooleanField(default=False)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE, blank=True, null=True, related_name="ingredients")
    
    def __str__(self):
        return self.name