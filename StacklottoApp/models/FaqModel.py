from django.db import models

class FaqModel(models.Model):
    question = models.CharField(max_length=100)
    answer = models.TextField()
    group = models.ForeignKey("FaqGroupModel", related_name="faqs", on_delete=models.CASCADE)

    def __str__(self):
        return self.question

    @property
    def dict(self):
        return {
            "question": self.question,
            "answer": self.answer,
            "group": self.group.title
        }

    class Meta:
        verbose_name = "Frequently Asked Question"
        verbose_name_plural = "Frequently Asked Questions"