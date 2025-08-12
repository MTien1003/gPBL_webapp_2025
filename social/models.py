from django.db import models


class Post(models.Model):
    text = models.TextField(max_length=2000)
    image = models.ImageField(upload_to="social", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.text[:50]