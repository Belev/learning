from django.contrib import admin
from post.models import Post


class PostAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Post info', {
            'classes': ['collapse'],
            'fields': ['title', 'subtitle', 'created_on', 'author']
        }),
        (None, {'fields': ['text', 'image_url']})
    ]
    list_display = ['title', 'created_on', 'author']

admin.site.register(Post, PostAdmin)
# Register your models here.
