from django.contrib import admin
from StacklottoApp import models

class ContactAdmin(admin.ModelAdmin):
    readonly_fields = ["first_name", "last_name", "phone", "email", "message", "when"]

admin.site.register(models.ContactModel, ContactAdmin)