from django.db import models

class NewsLetterSubscriptionModel(models.Model):
    email = models.EmailField(max_length=75, unique=True)
    
    def __str__(self):
        return self.email

    @property
    def dict(self):
        return {
            "email": email
        }

    class Meta:
        verbose_name = "Newsletter Email"
        verbose_name_plural = "Newsletter Emails"