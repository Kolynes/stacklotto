from django.contrib import admin
from StacklottoApp import models

class NewsLetterSubscriptionAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.NewsLetterSubscriptionModel, NewsLetterSubscriptionAdmin)