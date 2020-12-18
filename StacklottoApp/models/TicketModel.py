from django.db import models
from utils.code_generator import generate_number_code

class TicketModel(models.Model):
    EXACT_ORDER = "EO"
    ANY_ORDER = "AO"
    EXACT_ORDER_ANY_ORDER = "XO"
    TWO_FRONT_NUMBER_PLAY = "2F"
    TWO_BACK_NUMBER_PLAY = "2B"

    LOTTERY_TYPES = (
        (EXACT_ORDER, "Exact Order"),
        (ANY_ORDER, "Any Order"),
        (EXACT_ORDER_ANY_ORDER, "Exact Order / Any Order"),
        (TWO_FRONT_NUMBER_PLAY, "2 Front Number Play"),
        (TWO_BACK_NUMBER_PLAY, "2 Back Number Play"),
    )

    reference_number = models.CharField(max_length=50, unique=True)
    type = models.CharField(max_length=2, choices=LOTTERY_TYPES, null=True, blank=True)
    lottery = models.ForeignKey("LotteryModel", on_delete=models.CASCADE)
    batch = models.CharField(max_length=100)
    picks = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)

    def __str__(self) -> str:
        return self.reference_number

    @property
    def picks_list(self):
        return self.picks.split(",")

    @property
    def dict(self):
        return {
            "referenceNumber": self.reference_number,
            "type": self.get_type_display(),
            "lottery": self.lottery.dict,
            "batch": self.batch.dict,
            "picks": self.picks_list
        }

    def save(self, *args, **kwargs):
        if not self.reference_number:
            self.reference_number = "T{}{}".format(self.batch[1:3], generate_number_code(6))
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Ticket"
        verbose_name_plural = "Tickets"
