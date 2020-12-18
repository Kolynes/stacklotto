from django import forms
from StacklottoApp import models

class ChangeNameForm(forms.ModelForm):
    class Meta:
        model = models.UserModel
        fields = ["first_name", "last_name"]

    def clean_first_name(self) -> str:
        first_name: str = self.cleaned_data["first_name"]
        if len(first_name) == 0:
            forms.ValidationError("First name not given")
        else:
            return first_name.capitalize()

    def clean_last_name(self) -> str:
        last_name: str = self.cleaned_data["last_name"]
        if len(last_name) == 0:
            forms.ValidationError("Last name not given")
        else:
            return last_name.capitalize()