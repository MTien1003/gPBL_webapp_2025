from django.contrib import admin

from .models import *

admin.site.register(Dish)
admin.site.register(Ingredient)
admin.site.register(DishIngredient)
