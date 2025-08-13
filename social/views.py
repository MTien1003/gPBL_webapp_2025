from django.shortcuts import render

from django.http import JsonResponse
import os
from django.conf import settings
from django.utils import timezone
from dish.models import Dish
from dish.models import Ingredient
from cart.models import Cart, CartDetail

def socialnetwork(request):
	# if request.method == 'POST':
	# 	text = request.POST.get('text', '')
	# 	image = request.FILES.get('image')
	# 	image_url = ''
	# 	if image:
	# 		# Lưu file vào media/social/picture/
	# 		folder = os.path.join(settings.MEDIA_ROOT, 'social', 'picture')
	# 		os.makedirs(folder, exist_ok=True)
	# 		filename = timezone.now().strftime('%Y%m%d%H%M%S_') + image.name
	# 		filepath = os.path.join(folder, filename)
	# 		with open(filepath, 'wb+') as f:
	# 			for chunk in image.chunks():
	# 				f.write(chunk)
	# 		image_url = settings.MEDIA_URL + f'social/picture/{filename}'
	# 	return JsonResponse({
	# 		'status': 'success',
	# 		'text': text,
	# 		'image_url': image_url,
	# 		'created_at': timezone.now().isoformat(),
	# 	})
 
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
