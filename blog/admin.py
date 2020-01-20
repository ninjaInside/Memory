from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    '''
    Admin Model register class. Using Post model

    ATTRIBUTES:
        list_view - list of fields. 'name' and 'date'
        list_filter - list of filter fields. 'name', 'date'
        search_fields - search fields. 'name', 'description'
    '''
    list_view = ('name', 'date')
    list_filter = ('name', 'date')
    search_fields = ('name', 'description')
