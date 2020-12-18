from django.db import models
from utils.code_generator import generate_number_code

class TransactionModel(models.Model):
    FUND = "F"
    BUY_TICKET = "B"
    WITHDRAWAL = "W"

    PENDING = "P"
    COMPLETED = "C"

    TRANSACTION_TYPES = (
        (FUND, "Wallet Funded"),
        (BUY_TICKET, "Buy Ticket"),
        (WITHDRAWAL, "Withdrawal"),
    )

    TRANSACTION_STATUS = (
        (PENDING, "Pending"),
        (COMPLETED, "Completed")
    )

    type = models.CharField(max_length=1, choices=TRANSACTION_TYPES)
    status = models.CharField(max_length=1, choices=TRANSACTION_STATUS)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey("UserModel", on_delete=models.CASCADE)
    reference_number = models.CharField(max_length=25, unique=True)
    details = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}/{}".format(self.user.get_username(), self.reference_number)

    @property
    def dict(self):
        return {
            "type": self.get_type_display(),
            "status": self.get_status_display(),
            "amount": float(self.amount),
            "referenceNumber": self.reference_number,
            "details": self.details,
            "date": self.date.timestamp() * 1000
        }

    def save(self, *args, **kwargs):
        if not self.reference_number:
            self.reference_number = "U{}{}".format(self.user.id, generate_number_code(6))
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Transaction"
        verbose_name_plural = "Transactions"
        ordering = ["-date"]