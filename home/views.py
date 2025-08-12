from django.shortcuts import render
from django.http import HttpResponse
from dish.models import Dish
from dish.models import Ingredient

def home(request):
    context = {
        'dishes': Dish.objects.all(),
    }
    return render(request, 'home.html', context)

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def dish_detail(request, dish_id):
    dish = Dish.objects.get(id=dish_id)
    ingredients = Ingredient.objects.filter(dish_ingredients__dish=dish)
    context = {
        'dish': dish,
        'ingredients': ingredients
    }
    return render(request, 'vietnamese-food-detail.html', context)
