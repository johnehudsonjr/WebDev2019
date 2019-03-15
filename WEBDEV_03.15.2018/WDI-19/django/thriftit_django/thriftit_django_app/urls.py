from django.urls import path
from .views import *

urlpatterns = [
    path('', thriftitIndex),
    path('thrifting/', thrifting)
]