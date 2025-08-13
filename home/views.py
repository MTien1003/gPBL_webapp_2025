from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from dish.models import Dish
from dish.models import Ingredient
from cart.models import Cart, CartDetail


def register(request):
    msg = ''
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        password_confirm = request.POST.get('password_confirm')
        if User.objects.filter(username=username).exists():
            msg = 'Username already exists.'
            return render(request, 'register.html', {'msg': msg})
        elif password != password_confirm:
            msg = 'Passwords do not match.'
            return render(request, 'register.html', {'msg': msg})
        else:
            user = User.objects.create_user(username=username, password=password)
            return render(request, 'login.html', {'msg': 'Registration successful! Please login.'})
    return render(request, 'register.html', {'msg': msg})

def login_view(request):
    msg = ''
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return render(request, 'home.html', {'dishes': Dish.objects.all(), 'msg': 'Login successful!'})
        else:
            msg = 'Invalid username or password.'
    return render(request, 'login.html', {'msg': msg})

def home(request):
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetails = cart.cartdetail_set.all()
        quantity = cart.get_cart_items()
    else:
        cartDetails = []
        cart = None
        quantity = 0

    context = {
        'dishes': Dish.objects.all(),
        'cartDetails': cartDetails,
        'quantity': quantity
    }
    return render(request, 'home.html', context)

def about(request):
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetails = cart.cartdetail_set.all()
        quantity = cart.get_cart_items()
    else:
        cartDetails = []
        cart = None
        quantity = 0

    context = {
        'dishes': Dish.objects.all(),
        'cartDetails': cartDetails,
        'quantity': quantity
    }
    return render(request, 'about.html', context)

def contact(request):
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetails = cart.cartdetail_set.all()
        quantity = cart.get_cart_items()
    else:
        cartDetails = []
        cart = None
        quantity = 0

    context = {
        'dishes': Dish.objects.all(),
        'cartDetails': cartDetails,
        'quantity': quantity
    }
    return render(request, 'contact.html', context)

def dish_detail(request, dish_id):
    dish = Dish.objects.get(id=dish_id)
    ingredients = Ingredient.objects.filter(dish_ingredients__dish=dish)
    context = {
        'dish': dish,
        'ingredients': ingredients
    }
    return render(request, 'vietnamese-food-detail.html', context)

def logout_view(request):
    logout(request)
    return render(request, 'home.html', {'dishes': Dish.objects.all(), 'msg': 'Logout successful!'})
