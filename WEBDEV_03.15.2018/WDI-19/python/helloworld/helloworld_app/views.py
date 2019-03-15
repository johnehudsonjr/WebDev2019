from django.shortcuts import render
from django.http import HttpResponse

def helloIndex(req):
    return HttpResponse("ello!")
