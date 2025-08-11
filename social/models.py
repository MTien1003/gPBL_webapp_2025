from django.db import models
import uuid



class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.TextField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.created_at