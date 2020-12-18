from django import forms
from StacklottoApp import models

def amount_cleaner(self):
    amount = self.cleaned_data["amount"]
    if(amount < 0):
        print("negative amount not accepted")
        raise forms.ValidationError("negative amount not accepted")
    elif(amount > self.instance.user.balance):
        print("insufficient funds")
        raise forms.ValidationError("insufficient funds")
    else:
        return amount

class WithdrawalForm(forms.ModelForm):
    class Meta:
        model = models.TransactionModel
        fields = ["amount"]

    def __init__(self, *args, **kwargs):
        instance = models.TransactionModel(
            type=models.TransactionModel.WITHDRAWAL,
            status=models.TransactionModel.PENDING,
            user=kwargs.pop("user")
        )
        super().__init__(instance=instance, *args, **kwargs)

    def clean_amount(self):
        return amount_cleaner(self)

class BuyForm(forms.ModelForm):
    class Meta:
        model = models.TransactionModel
        fields = ["amount"]

    def __init__(self, *args, **kwargs):
        instance = models.TransactionModel(
            type=models.TransactionModel.BUY_TICKET,
            status=models.TransactionModel.COMPLETED,
            user=kwargs.pop("user")
        )
        super().__init__(instance=instance, *args, **kwargs)

    def clean_amount(self):
        return amount_cleaner(self)