from django.shortcuts import render
from django.views import View
from .forms import PageForm
from django.http import HttpResponse

def social(request):
    return render(request, 'socialnetwork.html')

class PageCreateView(View):
    def get(self, request):
        form = PageForm()
        return render(request, 'socialnetwork.html', {"form": form})
    
    def post(self, request):
        form = PageForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, 'socialnetwork.html', {"form": form})
    

page_create = PageCreateView.as_view()