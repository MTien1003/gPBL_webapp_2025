from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views import View
from .forms import CommentForm
from .models import Comment
from django.http import HttpResponse

def social(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('social')
    else:
        form = CommentForm()
    return render(request, 'socialnetwork.html', {'form': form})
        