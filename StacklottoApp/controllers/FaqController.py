from utils.controller import Controller
from StacklottoApp.models import FaqModel, FaqGroupModel
from utils.shortcuts import json_response

class FaqController(Controller):

    @Controller.route()
    def faqs(self, request):
        faq_group = FaqGroupModel.objects.get(title=request.GET["g"])
        return json_response(True, data=[
            faq.dict for faq in FaqModel.objects.filter(group=faq_group)
        ])

    @Controller.route()
    def groups(self, request):
        return json_response(True, data=[
            faq_group.dict for faq_group in FaqGroupModel.objects.all()
        ])