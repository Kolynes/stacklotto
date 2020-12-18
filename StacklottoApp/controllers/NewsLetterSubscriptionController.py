from utils.controller import Controller
from utils.shortcuts import json_response
from StacklottoApp.models import NewsLetterSubscriptionModel

class NewsLetterSubscriptionController(Controller):

    @Controller.route()
    def subscribe(self, request):
        NewsLetterSubscriptionModel.objects.create(email=request.POST["email"])
        return json_response(True)
