
from urllib import request
from django.shortcuts import render
from django.http import JsonResponse

from cart.models import Cart
from cart.models import CartDetail
from order.models import Order
from order.models import OrderDetail

def checkout(request):
    if request.user.is_authenticated:
        user = request.user
        cart, created = Cart.objects.get_or_create(user=user)
        cartDetails = cart.cartdetail_set.all()
        totalPrice = cart.get_cart_total()
    else:
        cartDetails = []
        cart = None
        totalPrice = 0

    context = { 'cart': cart, 'cartDetails': cartDetails, 'totalPrice': totalPrice }
    return render(request, 'checkout.html', context)

def place_order(request):
    if request.user.is_authenticated:
        if request.method == 'POST':
            name = request.POST.get('name')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            user = request.user
            cart, created = Cart.objects.get_or_create(user=user)
            cartDetails = cart.cartdetail_set.all()


            # Lưu vào Order
            order = Order.objects.create(
            user=user,
            total_price=cart.get_cart_total(),
            receiver_name=name,
            receiver_phone=phone,
            receiver_address=address
            )
            for item in cartDetails:
                OrderDetail.objects.create(
                order=order,
                ingredient=item.ingredient,
                quantity=item.quantity
            )
        

            # Xóa giỏ hàng sau khi đặt hàng
            cart.delete()
            return render(request, 'placeorder.html', {'order': order})
    return render(request, 'placeorder.html')
