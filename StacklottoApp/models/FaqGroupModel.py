from django.db import models

class FaqGroupModel(models.Model):
    title = models.CharField(max_length=140, unique=True)

    def __str__(self):
        return self.title

    @property
    def dict(self):
        return {
            "title": self.title
        }

    class Meta:
        verbose_name = "FAQ Group"
        verbose_name_plural = "FAQ Groups"