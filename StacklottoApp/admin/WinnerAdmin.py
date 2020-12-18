from django.contrib import admin
from StacklottoApp import models

class WinnerAdmin(admin.ModelAdmin):
    readonly_fields = ["user", "lottery", "ticket"]

admin.site.register(models.WinnerModel, WinnerAdmin)