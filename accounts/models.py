from django.db import models


# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=False)
    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, blank=True)
    password = models.CharField(max_length=128)
    confirm_password = models.CharField(max_length=128)

