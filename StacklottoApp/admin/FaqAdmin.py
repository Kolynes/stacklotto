from django.contrib import admin
from StacklottoApp import models

class FaqAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.FaqModel, FaqAdmin)