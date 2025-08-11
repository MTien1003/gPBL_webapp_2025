from django.shortcuts import render, get_object_or_404
from .models import Dish

def vietnamese_food_detail(request):
    dish_id = request.GET.get('id')  # URLパラメータからidを取得
    dish = get_object_or_404(Dish, pk=dish_id)
    return render(request, 'dish/vietnamese-food-detail.html', {'dish': dish})
