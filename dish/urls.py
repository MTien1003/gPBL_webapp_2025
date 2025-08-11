from django.urls import path
from . import views

urlpatterns = [
    path('vietnamese-food-detail/', views.vietnamese_food_detail, name='vietnamese_food_detail'),
]
