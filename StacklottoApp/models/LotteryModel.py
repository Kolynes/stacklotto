from django.db import models

class LotteryModel(models.Model):
    STACKLOTTO_649 = "L649"
    STACKLOTTO_425 = "L425"
    LUCKY_5 = "LUC5"
    MATCH_4 = "MAT4"
    MATCH_3 = "MAT3"
    MATCH_2 = "MAT2"

    LOTTERY_NAMES = (
        (STACKLOTTO_649, "Stacklotto 649"),
        (STACKLOTTO_425, "Stacklotto 425"),
        (LUCKY_5, "Lucky 5"),
        (MATCH_4, "Match 4"),
        (MATCH_3, "Match 3"),
        (MATCH_2, "Match 2"),
    )

    name = models.CharField(max_length=4, choices=LOTTERY_NAMES) 
    prize = models.DecimalField(max_digits=10, decimal_places=2)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    created = models.DateTimeField(auto_now_add=True)
    agent_commission = models.IntegerField(default=20)
    draw_date = models.DateTimeField()
    winning_picks = models.CharField(max_length=50)

    def __str__(self):
        return self.get_name_display()

    @property
    def winning_picks_list(self):
        return self.winning_picks.split(",")

    @property
    def dict(self):
        return {
            "id": self.pk,
            "name": self.get_name_display(),
            "prize": float(self.prize),
            "cost": float(self.cost),
            "drawDate": self.draw_date.timestamp() * 1000,
            "agentCommission": self.agent_commission
        }

    class Meta:
        verbose_name = "Loterry"
        verbose_name_plural = "Loterries"
