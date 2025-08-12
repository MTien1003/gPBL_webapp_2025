from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('socialnetwork.html', views.social, name='socialnetwork_html'),

]