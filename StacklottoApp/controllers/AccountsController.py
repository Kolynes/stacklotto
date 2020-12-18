from utils.controller import Controller
from utils.decorators import ensure_signed_in, ensure_post
from utils.shortcuts import json_response
from StacklottoApp import forms, models

class AccountsController(Controller):

    @Controller.route()
    @Controller.decorate(ensure_signed_in)
    def ping(self, request):
        try:
            affiliate_dict = models.AffiliateModel.objects.get(user=request.user)
        except models.AffiliateModel.DoesNotExist:
            affiliate_dict = {}
        try:
            agent_dict = models.AgentModel.objects.get(user=request.user)
        except models.AgentModel.DoesNotExist:
            agent_dict = {}
        return json_response(True, data={
            **request.user.dict,
            **affiliate_dict,
            **agent_dict
        })

    @Controller.route()
    @Controller.decorate(ensure_signed_in, ensure_post)
    def change_name(self, request):
        form = forms.ChangeNameForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return json_response(True)
        return json_response(False, error="Invalid input")

    @Controller.route()
    @Controller.decorate(ensure_signed_in, ensure_post)
    def edit_bank_details(self, request):
        form = forms.EditBankDetailsForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return json_response(True)
        return json_response(False, error=forms.errors)
        
