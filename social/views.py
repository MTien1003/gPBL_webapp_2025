from django.shortcuts import render
from django.views import View
from django.http import HttpResponse


def social(request):
    return render(request, 'socialnetwork.html')