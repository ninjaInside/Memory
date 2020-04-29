from django.contrib import admin

from .models import Post


def make_published(modeladmin, request, queryset):
    queryset.update(is_confirm=True)


def make_unpublished(modeladmin, request, queryset):
    queryset.update(is_confirm=False)


make_published.short_description = 'Опубликовать выбранные посты'
make_unpublished.short_description = 'Убрать выбранные посты из публикации'


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'author', 'is_confirm')
    search_fields = ('name', 'description')
    actions = [make_published, make_unpublished]
    raw_id_fields = ('author', )
