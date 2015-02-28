from django.contrib import admin
from post.models import Post


class PostAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Post info', {
            'classes': ['collapse'],
            'fields': ['title', 'created_on', 'author']
        }),
        ('Post text', {
            'classes': ['collapse'],
            'fields': ['text']
        }),
        ('Post tags', {
            'classes': ['collapse'],
            'fields': ['tags']
        }),
        (None, {'fields': ['image_url']})
    ]
    list_display = ['title', 'created_on', 'author']

admin.site.register(Post, PostAdmin)
# Register your models here.
