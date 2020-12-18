from django import forms
from StacklottoApp import models

class EditBankDetailsForm(forms.ModelForm):
    class Meta: 
        model = models.UserModel
        fields = ["bank_name", "bank_account_number", "bank_account_name"]

    def clean_bank_name(self) -> str:
        bank_name: str = self.cleaned_data["bank_name"]
        if len(bank_name) == 0:
            forms.ValidationError("Bank name not given")
        else:
            return bank_name.capitalize()

    def clean_bank_account_name(self) -> str:
        bank_account_name: str = self.cleaned_data["bank_account_name"]
        if len(bank_account_name) == 0:
            forms.ValidationError("Bank account name not given")
        else:
            return bank_account_name.capitalize()

    def clean_bank_account_number(self) -> str:
        bank_account_number: str = self.cleaned_data["bank_account_number"]
        if len(bank_account_number) == 0:
            forms.ValidationError("Bank account number not given")
        else:
            return bank_account_number