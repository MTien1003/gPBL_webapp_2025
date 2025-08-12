from itertools import product
from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from django.contrib import messages
import json

from cart.models import Cart
from cart.models import CartDetail
from order.models import Order
from dish.models import Ingredient

def cart_view(request):
    """Main cart view - supports both authenticated and session-based carts"""
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetails = cart.cartdetail_set.all() 
        totalPrice = cart.get_cart_total()
    else:
        # For anonymous users, use session-based cart
        cart_items = request.session.get('cart', {})
        cartDetails = []
        totalPrice = 0
        
        # Convert session cart to display format
        for ingredient_id, quantity in cart_items.items():
            try:
                ingredient = Ingredient.objects.get(id=ingredient_id)
                item_total = ingredient.price * quantity
                cartDetails.append({
                    'ingredient': ingredient,
                    'quantity': quantity,
                    'get_total_price': item_total
                })
                totalPrice += item_total
            except Ingredient.DoesNotExist:
                continue

    context = { 
        'cart': cart if request.user.is_authenticated else None, 
        'cartDetails': cartDetails, 
        'totalPrice': totalPrice
    }
    return render(request, 'cart.html', context)

def add_to_cart(request):
    """Add item to cart"""
    if request.method == 'POST':
        ingredient_id = request.POST.get('ingredient_id')
        quantity = int(request.POST.get('quantity', 1))
        
        if request.user.is_authenticated:
            # Authenticated user - use database
            try:
                ingredient = Ingredient.objects.get(id=ingredient_id)
                cart, created = Cart.objects.get_or_create(user=request.user)
                cart_detail, created = CartDetail.objects.get_or_create(
                    cart=cart, 
                    ingredient=ingredient,
                    defaults={'quantity': quantity}
                )
                if not created:
                    cart_detail.quantity += quantity
                    cart_detail.save()
                messages.success(request, f"{ingredient.name} added to cart!")
            except Ingredient.DoesNotExist:
                messages.error(request, "Item not found!")
        else:
            # Anonymous user - use session
            cart_items = request.session.get('cart', {})
            cart_items[ingredient_id] = cart_items.get(ingredient_id, 0) + quantity
            request.session['cart'] = cart_items
            messages.success(request, "Item added to cart!")
    
    return redirect('cart:index')

def remove_from_cart(request, item_id):
    """Remove item from cart"""
    if request.user.is_authenticated:
        try:
            cart_detail = CartDetail.objects.get(id=item_id, cart__user=request.user)
            ingredient_name = cart_detail.ingredient.name
            cart_detail.delete()
            messages.success(request, f"{ingredient_name} removed from cart!")
        except CartDetail.DoesNotExist:
            messages.error(request, "Item not found in cart!")
    else:
        # Handle session-based cart removal
        cart_items = request.session.get('cart', {})
        if str(item_id) in cart_items:
            del cart_items[str(item_id)]
            request.session['cart'] = cart_items
            messages.success(request, "Item removed from cart!")
    
    return redirect('cart:index')

def update_cart(request):
    """Update cart quantities"""
    if request.method == 'POST':
        for key, value in request.POST.items():
            if key.startswith('quantity_'):
                item_id = key.split('_')[1]
                quantity = int(value)
                
                if request.user.is_authenticated:
                    try:
                        cart_detail = CartDetail.objects.get(id=item_id, cart__user=request.user)
                        if quantity > 0:
                            cart_detail.quantity = quantity
                            cart_detail.save()
                        else:
                            cart_detail.delete()
                    except CartDetail.DoesNotExist:
                        continue
                else:
                    # Update session cart
                    cart_items = request.session.get('cart', {})
                    if quantity > 0:
                        cart_items[item_id] = quantity
                    else:
                        cart_items.pop(item_id, None)
                    request.session['cart'] = cart_items
        
        messages.success(request, "Cart updated!")
    
    return redirect('cart:index')

# Keep the original function for backward compatibility
def cart(request):
    """Legacy cart view"""
    return cart_view(request)


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
