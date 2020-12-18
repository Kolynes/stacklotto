from django.db import models

class ContactModel(models.Model):
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=200, blank=True)
    message = models.TextField(blank=True)
    when = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        verbose_name = "Contact Us Message"
        verbose_name_plural = "Contact Us Messages"