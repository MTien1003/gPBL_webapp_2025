from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home.html', views.home, name='home'),
    path('about.html', views.about, name='about'),
    path('socialnetwork.html', views.social, name='social'),
    path('contact.html', views.contact, name='contact'),
    path('vietnamese-food-detail.html', views.food_detail, name='vietnamese_food_detail'),
]

