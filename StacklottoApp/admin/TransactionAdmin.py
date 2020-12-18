from django.contrib import admin
from StacklottoApp import models

class TransactionAdmin(admin.ModelAdmin):
    readonly_fields = ("type", "amount", "user", "reference_number", "details", "date")

admin.site.register(models.TransactionModel, TransactionAdmin)