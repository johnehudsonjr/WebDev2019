from django.contrib import admin
from .models import Meal

from .models import Ingredient

admin.site.register(Ingredient)

admin.site.register(Meal)