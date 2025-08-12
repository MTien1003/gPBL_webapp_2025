from django.urls import path
from . import views

urlpatterns = [
    path('checkout.html', views.checkout, name='checkout'),
]