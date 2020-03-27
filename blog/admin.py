from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    '''
    Admin Model register class. Using Post model

    ATTRIBUTES:
        list_view - list of fields. 'name' and 'date'
        search_fields - search fields. 'name', 'description'
    '''
    list_display = ('name', 'date')
    search_fields = ('name', 'description')
