from django.urls import path
from . import views

urlpatterns = [
	path('register.html', views.register, name='register_html'),
    path('login.html', views.login_view, name='login_html'),
    path('process_register/', views.process_register, name='process_register'),
]
