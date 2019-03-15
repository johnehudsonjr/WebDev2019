from rest_framework import serializers 
from .models import Meal
from .models import Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    # ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Ingredient
        fields = ('id', 'name')
        
class MealSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Meal
        fields = ('id', 'name', 'ingredients')

