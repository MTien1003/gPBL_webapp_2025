from django.db import models

class Dish(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100,null=True, blank=True)
    description = models.TextField()
    instructions = models.TextField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='dish/', null=True, blank=True)
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        if self.image:
            return self.image.url
        return ''

class Ingredient(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100,null=True, blank=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    image = models.ImageField(upload_to='ingredient/', null=True, blank=True)

    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        if self.image:
            return self.image.url
        return ''

class DishIngredient(models.Model):
    id = models.AutoField(primary_key=True)
    dish = models.ForeignKey(Dish, related_name='dish_ingredients', on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, related_name='dish_ingredients', on_delete=models.CASCADE)

