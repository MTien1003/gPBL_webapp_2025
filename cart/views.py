from itertools import product
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import json

from cart.models import Cart
from cart.models import CartDetail
from order.models import Order
from dish.models import Ingredient
    

def cart(request):
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetails = cart.cartdetail_set.all() 
        totalPrice = cart.get_cart_total()
    else:
        cartDetails = []
        cart = None
        totalPrice = 0

    context = { 'cart': cart, 'cartDetails': cartDetails, 'totalPrice': totalPrice}
    return render(request, 'cart.html', context)


def updateItem(request):
    try:
        data = json.loads(request.body)
        ingredientId = data['ingredientId']
        action = data['action']

        print(f"Ingredient ID: {ingredientId}, Action: {action}")  # Debug

        if not request.user.is_authenticated:
            return JsonResponse({'error': 'User not authenticated'}, status=401)
            
        user = request.user
        ingredient = Ingredient.objects.get(id=ingredientId)
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetail, created = CartDetail.objects.get_or_create(cart=cart, ingredient=ingredient)

        old_quantity = cartDetail.quantity

        if action == 'add':
            cartDetail.quantity += 1
        elif action == 'remove':
            cartDetail.quantity -= 1

        cartDetail.save()

        if cartDetail.quantity <= 0:
            cartDetail.delete()
            return JsonResponse({
                'status': 'success', 
                'message': 'Item removed',
                'item_deleted': True,
                'cart_total': cart.get_cart_total(),
                'cart_items': cart.get_cart_items()
            })

        print(f"Cart item quantity: {cartDetail.quantity}")  # Debug
        return JsonResponse({
            'status': 'success', 
            'message': 'Item updated',
            'item_deleted': False,
            'new_quantity': cartDetail.quantity,
            'item_total': cartDetail.get_total_price(),
            'cart_total': cart.get_cart_total(),
            'cart_items': cart.get_cart_items()
        })
        
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug
        return JsonResponse({'error': str(e)}, status=500)
