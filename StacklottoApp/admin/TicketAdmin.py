from django.contrib import admin
from StacklottoApp import models

class TicketAdmin(admin.ModelAdmin):
    reaonly_fields = ["reference_number", "lottery", "batch", "picks", "type"]

admin.site.register(models.TicketModel, TicketAdmin)