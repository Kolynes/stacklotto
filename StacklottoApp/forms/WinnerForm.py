from django import forms
from StacklottoApp import models

class WinnerForm(forms.ModelForm):
    class Meta:
        model = models.WinnerModel
        fields = ["ticket", "lottery"]

    def clean_ticket(self):
        ticket = self.cleaned_data["ticket"]
        lottery = self.cleaned_data["lottery"]
        if ticket.lottery.pk != lottery.pk:
            forms.ValidationError("Invalid lottery")
        elif lottery.name in (models.LotteryModel.STACKLOTTO_649, models.LotteryModel.STACKLOTTO_425, models.LotteryModel.LUCKY_5):
            if lottery.winning_picks == ticket.picks:
                return self.cleaned_data["ticket"]
        elif ticket.type == models.TicketModel.EXACT_ORDER:
            if lottery.winning_picks == ticket.picks:
                return self.cleaned_data["ticket"]
        elif ticket.type == models.TicketModel.ANY_ORDER or ticket.type == models.TicketModel.EXACT_ORDER_ANY_ORDER :
            picks = ticket.picks.split(",")
            winning_picks = lottery.winning_picks.split(",")
            for pick in picks:
                if pick not in winning_picks:
                    forms.ValidationError("Not a winner")   
            return self.cleaned_data["ticket"]
        elif ticket.type == models.TicketModel.TWO_BACK_NUMBER_PLAY:
            pass

