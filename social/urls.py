from django.contrib import admin
from django.urls import path
from django.urls import path
from . import views

app_name='social'
urlpatterns = [
    path('', views.social, name="social"),
]