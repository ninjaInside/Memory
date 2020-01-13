from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_view = ('name', 'date')
    list_filter = ('name', 'date')
    search_fields = ('name', 'description')
