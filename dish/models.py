from django.db import models

class Dish(models.Model):

    CATEGORY_CHOICES = [
        ('noodles', 'Noodles'),
        ('rice', 'Rice Dishes'),
        ('appetizer', 'Appetizers'),
        ('dessert', 'Desserts'),
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(null=True, blank=True, upload_to='dish/')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='noodles')
    #original_recipe = models.TextField()
    alt_recipe = models.TextField()
    
    
    def __str__(self):
        return self.name

class Ingredient(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    def __str__(self):
        return self.name
    
class DishIngredient(models.Model):
    id = models.AutoField(primary_key=True)
    dish = models.ForeignKey(Dish, related_name='dish_ingredients', on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, related_name='dish_ingredients', on_delete=models.CASCADE)

