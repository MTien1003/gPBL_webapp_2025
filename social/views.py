from django.shortcuts import render

from django.http import JsonResponse
import os
from django.conf import settings
from django.utils import timezone
from dish.models import Dish
from dish.models import Ingredient
from cart.models import Cart, CartDetail

def socialnetwork(request):
 
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
    return render(request, 'socialnetwork.html', context)
