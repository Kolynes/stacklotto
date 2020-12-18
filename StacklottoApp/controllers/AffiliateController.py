from utils.controller import Controller
from utils.shortcuts import json_response
from utils.decorators import ensure_signed_in
from StacklottoApp import models

class AffiliateController(Controller):

    @Controller.route()
    @Controller.decorate(ensure_signed_in)
    def get(self, request):
        try:
            affiliate = models.AffiliateModel.objects.get(user=request.user)
            return json_response(True, data=affiliate.dict)
        except models.AffiliateModel.DoesNotExist:
            return json_response(False, error="You are not an affiliate")