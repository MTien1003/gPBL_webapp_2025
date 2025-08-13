from django.urls import path
from . import views

urlpatterns = [
    path('', views.socialnetwork, name='socialnetwork'),
]
