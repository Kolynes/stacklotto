from utils.controller import Controller
from utils.shortcuts import json_response
from StacklottoApp import models
from django.utils import timezone
import datetime

class LotteryController(Controller):

    @Controller.route()
    def get(self, request):
        return json_response(True, data=[
            lottery.dict for lottery in models.LotteryModel.objects.filter(draw_date__gt=datetime.datetime.now())
        ])