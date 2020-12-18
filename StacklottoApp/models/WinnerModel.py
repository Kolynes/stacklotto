from django.db import models

class WinnerModel(models.Model):
    user = models.ForeignKey("UserModel", on_delete=models.CASCADE)
    lottery = models.ForeignKey("LotteryModel", on_delete=models.CASCADE)
    ticket = models.ForeignKey("TicketModel", on_delete=models.CASCADE)

    def __str__(self):
        return self.user.get_username()

    @property
    def dict(self):
        return {
            "user": self.user.dict,
            "lottery": self.lottery.dict,
            "ticket": self.ticket.dict
        }

    class Meta:
        verbose_name = "Winner"
        verbose_name_plural = "Winners"