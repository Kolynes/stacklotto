from django import forms
from StacklottoApp import models

class TicketForm(forms.ModelForm):
    class Meta:
        model = models.TicketModel
        fields = ["picks", "type", "batch", "phone", "name"]

    def __init__(self, *args, **kwargs):
        instance = models.TicketModel(
            lottery=kwargs.pop("lottery")
        )
        super().__init__(instance=instance, *args, **kwargs)

    def clean_picks(self):
        if self.instance.lottery.name == models.LotteryModel.STACKLOTTO_649:
            if len(self.cleaned_data["picks"].split(",")) != 6:
                forms.ValidationError("6 picks needed")
        elif self.instance.lottery.name == models.LotteryModel.STACKLOTTO_425:
            if len(self.cleaned_data["picks"].split(",")) != 4:
                forms.ValidationError("4 picks needed")
        elif self.instance.lottery.name == models.LotteryModel.LUCKY_5:
            if len(self.cleaned_data["picks"].split(",")) != 5:
                forms.ValidationError("5 picks needed")
        elif self.instance.lottery.name == models.LotteryModel.MATCH_4:
            if len(self.cleaned_data["picks"].split(",")) != 4:
                forms.ValidationError("4 picks needed")
        elif self.instance.lottery.name == models.LotteryModel.MATCH_3:
            if len(self.cleaned_data["picks"].split(",")) != 3:
                forms.ValidationError("3 picks needed")
        elif self.instance.lottery.name == models.LotteryModel.MATCH_2:
            if len(self.cleaned_data["picks"].split(",")) != 2:
                forms.ValidationError("2 picks needed")
        return self.cleaned_data["picks"]
