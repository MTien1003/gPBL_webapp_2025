from django.shortcuts import render
from django.http import HttpResponse
from dish.models import Dish

def home(request):
    categories = Dish.CATEGORY_CHOICES
    category_data = []
    for code, label in categories:
        category_data.append({
            'code': code,
            'label': label,
            'dishes': Dish.objects.filter(category=code)
        })

    all_dishes = Dish.objects.all()

    return render(request, 'home/home.html', {
        'category_data': category_data,
        'all_dishes': all_dishes,
    })

def about(request):
    return render(request, 'about.html')
