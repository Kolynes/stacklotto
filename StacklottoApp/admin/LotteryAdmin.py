from django.contrib import admin
from StacklottoApp import models

class LotteryAdmin(admin.ModelAdmin):
    readonly_fields = ["created"]

admin.site.register(models.LotteryModel, LotteryAdmin)
