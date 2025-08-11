from django.db import models
import uuid



class Page(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    body = models.TextField(max_length=2000)
    created_at = models.TimeField(auto_now_add=True)
    
    def __str__(self):
        return self.created_at