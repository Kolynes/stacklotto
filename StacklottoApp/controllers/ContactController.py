from utils.controller import Controller
from utils.shortcuts import json_response
from StacklottoApp.forms.ContactForm import ContactForm

class ContactController(Controller):

    @Controller.route()
    def save(self, request):
        contact = ContactForm(request.POST)
        if contact.is_valid():
            contact.save()
            return json_response(True)
        return json_response(False, error="Invalid data");