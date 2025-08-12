from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home.html', views.home, name='home_html'),
    path('about.html', views.about, name='about_html'),
    path('socialnetwork.html', views.social, name='socialnetwork_html'),
    path('cart.html', views.cart, name='cart_html'),
    path('checkout.html', views.checkout, name='checkout_html'),
    path('placeorder.html', views.placeorder, name='placeorder_html'),
    path('contact.html', views.contact, name='contact_html'),
    path('login.html', views.login_view, name='login_html'),
    path('register.html', views.register, name='register_html'),
    path('vietnamese-food-detail.html', views.vietnamese_food_detail, name='vietnamese_food_detail_html'),
]

