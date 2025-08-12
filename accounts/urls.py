from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('profile/', views.profile_view, name='profile'),
    path('logout/', views.logout_view, name='logout'),
    path('process_register/', views.process_register, name='process_register'),
    path('update_profile/', views.update_profile, name='update_profile'),
    
    # Legacy support for .html URLs (redirect to new URLs)
    path('login.html', views.login_view, name='login_html'),
    path('register.html', views.register, name='register_html'),
    path('profile.html', views.profile_view, name='profile_html'),
]
