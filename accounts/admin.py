from django.contrib import admin
from .models import Account

# Register your models here.
@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'full_name', 'phone_number']
    list_filter = ['email']
    search_fields = ['username', 'email', 'full_name']
    readonly_fields = ['password', 'confirm_password']  # Ẩn password trong admin
    
    # Tùy chỉnh form hiển thị
    fieldsets = (
        ('Basic Information', {
            'fields': ('username', 'email', 'full_name', 'phone_number')
        }),
        ('Avatar', {
            'fields': ('avatar_url',)
        }),
        ('Password (Read Only)', {
            'fields': ('password', 'confirm_password'),
            'classes': ('collapse',)  # Thu gọn section này
        }),
    )
