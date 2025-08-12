from django.db import models
from django.contrib.auth.models import User
from dish.models import Ingredient

# Create your models here.
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    receiver_name = models.CharField(max_length=255, default='')
    receiver_phone = models.CharField(max_length=20, default='')
    receiver_address = models.TextField(default='')

class OrderDetail(models.Model):
    id = models.AutoField(primary_key=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)


