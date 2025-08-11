from django.shortcuts import render, redirect
from django.views import View
from .forms import PageForm
from django.http import HttpResponse

def social(request):
    if request.method == 'POST':
        form = PageForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('social')
    else:
        form = PageForm()
    return render(request, 'socialnetwork.html', {'form': form})
        