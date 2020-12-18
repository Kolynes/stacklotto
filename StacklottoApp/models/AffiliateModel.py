from django.db import models
from utils.code_generator import generate_code

class AffiliateModel(models.Model):
    user = models.OneToOneField("UserModel", on_delete=models.CASCADE)
    referral_code = models.CharField(max_length=12)

    def __str__(self):
        return self.user.get_username()

    def save(self, *args, **kwargs):
        if not self.referral_code:
            self.referral_code = generate_code(12)
        super().__init__(*args, **kwargs)

    @property
    def dict(self):
        return {
            "referralCode": self.referral_code,
            "referrals": [referral.dict for referral in self.referrals.all()]
        }

    class Meta:
        verbose_name = "Affiliate"
        verbose_name_plural = "Affiliates"