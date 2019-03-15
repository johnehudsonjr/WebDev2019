from django.shortcuts import render
from .models import Artist, Song
# Create your views here.

def artist_index(request):
    context = {'artists': Artist.objects.all()}
    return render(request, 'tunr/artist_index.html', context)

def song_index (request):
    context = {'songs': Song.objects.all()}
    return render(request, 'tunr/song_index.html', context)