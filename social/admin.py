from django.contrib import admin
from .models import Comment

@admin.register(Comment)
class PageAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'created_at')
