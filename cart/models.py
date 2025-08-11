from django.db import models
from django.contrib.auth.models import User
from dish.models import Ingredient

class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sum = models.IntegerField(default=0)

    def get_cart_quantity(self):
        return self.sum
    def get_cart_items(self):
        return sum(item.quantity for item in self.cartdetail_set.all())
    def get_cart_total(self):
        return sum(item.get_total_price() for item in self.cartdetail_set.all())

class CartDetail(models.Model):
    id = models.AutoField(primary_key=True)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    
    def get_total_price(self):
        return self.quantity * self.price


