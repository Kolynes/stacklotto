from django.dispatch import receiver
from AccountsApp.signals import signed_up
from StacklottoApp import models

@receiver(signed_up)
def on_sign_up(sender, **kwargs):
    if kwargs["request"].GET["affiliate"] == "true":
        models.AffiliateModel(
            user=kwargs["user"]
        ).save()
    if kwargs["request"].GET["agent"] == "true":
        models.AgentModel(
            user=kwargs["user"],
            location=kwargs["request"].POST["location"]
        ).save()
    if kwargs["request"].GET.get("code"):
        try:
            referee = models.AffiliateModel.objects.get(referral_code=kwargs["request"].GET.get("code"))
            kwargs["user"].referee = referee
            kwargs["user"].save()
        except models.AffiliateModel.DoesNotExist:
            pass