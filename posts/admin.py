from django.contrib import admin

from .models import Veteran


class VeteranAdmin(admin.ModelAdmin):
    list_display = ['name', 'date']


admin.site.register(Veteran, VeteranAdmin)