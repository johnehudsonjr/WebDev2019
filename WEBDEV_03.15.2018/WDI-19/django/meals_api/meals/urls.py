from django.urls import path, include 
from . import views 
from rest_framework import routers

# This auto-generates urls for our rest API
router = routers.DefaultRouter()
router.register('meals', views.MealView)

urlpatterns = [
    path('', include(router.urls))
]