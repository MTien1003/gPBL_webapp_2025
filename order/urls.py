from django.urls import path
from . import views

urlpatterns = [
    path('', views.checkout, name='checkout'),
    path('place_order/', views.place_order, name='place_order'),
]