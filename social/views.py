from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def social(request):
    return render(request, 'socialnetwork.html')