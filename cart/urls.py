from django.urls import path
from . import views

urlpatterns = [
    path('cart.html', views.cart_view, name='cart'),
    path('add/', views.add_to_cart, name='add_to_cart'),
    path('remove/<int:item_id>/', views.remove_from_cart, name='remove_from_cart'),
    path('update/', views.update_cart, name='update_cart'),
    path('update_item/', views.updateItem, name='update_item'),
]
