from django.contrib import admin
from StacklottoApp import models

class FaqGroupAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.FaqGroupModel, FaqGroupAdmin)