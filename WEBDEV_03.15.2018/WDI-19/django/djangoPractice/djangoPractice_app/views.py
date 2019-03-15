# from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def helloIndex(req):
#     return render(req, 'djangoPractice_app/home.html')

from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Banana
from .forms import BananaForm

# Create your views here.
def helloIndex(req):
    if req.method == "POST":
        form = BananaForm(req.POST)
        if form.is_valid():
           form.save()
           return redirect('/hello')
    else:
        newForm = BananaForm()
        return render(req, 'djangoPractice_app/home.html', {'newBananaForm': newForm})

def showBananaPage(req, banana_id):
    banana = Banana.objects.get(id=banana_id)
    return render(req, 'djangoPractice_app/banana.html', {'banana':banana})