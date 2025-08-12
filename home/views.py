from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')
def about(request):
    return render(request, 'about.html')
def social(request):
    return render(request, 'socialnetwork.html')

def cart(request):
    return render(request, 'cart.html')

def checkout(request):
    return render(request, 'checkout.html')

def placeorder(request):
    return render(request, 'placeorder.html')

def contact(request):
    return render(request, 'contact.html')

def login_view(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')

def vietnamese_food_detail(request):
    return render(request, 'vietnamese-food-detail.html')
