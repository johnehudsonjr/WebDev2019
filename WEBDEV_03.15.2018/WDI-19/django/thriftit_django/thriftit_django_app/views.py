from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def thriftitIndex(req):
    return HttpResponse("<h1>Welcome to thrift page!</h1>")

def thrifting(req):
    return HttpResponse("<h1>Thrifting is fun!</h1>")