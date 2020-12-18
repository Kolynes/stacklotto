from django.forms import ModelForm
from StacklottoApp.models import ContactModel

class ContactForm(ModelForm):
    class Meta:
        model = ContactModel
        exclude = ["when"]
        