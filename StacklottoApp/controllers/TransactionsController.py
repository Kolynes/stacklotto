from utils.controller import Controller
from utils.decorators import ensure_signed_in, ensure_post
from utils.shortcuts import json_response
from StacklottoApp import forms, models
import json
import decimal
from utils.code_generator import generate_number_code

class TransactionsController(Controller):

    @Controller.route()
    @Controller.decorate(ensure_signed_in)
    def load(self, request):
        return json_response(True, data=[
            transaction.dict for transaction in models.TransactionModel.objects.filter(user=request.user)
        ])

    @Controller.route()
    @Controller.decorate(ensure_signed_in, ensure_post)
    def withdraw(self, request):
        form = forms.WithdrawalForm(user=request.user, data={
            **request.POST, 
        })
        if form.is_valid():
            transaction = form.save(commit=False)
            transaction.user = request.user
            transaction.save()
            return json_response(True)
        else:
            return json_response(False, error="Invalid input")

    @Controller.route()
    @Controller.decorate(ensure_signed_in)
    def buy(self, request):
        lottery = models.LotteryModel.objects.get(id=request.POST["lottery"])
        tickets = json.loads(request.POST["tickets"])
        total_cost = len(tickets) * lottery.cost
        type = request.POST["type"]
        buy_form = forms.BuyForm(user=request.user, data={
            "amount": total_cost,
        })
        ticket_objects = []
        batch = "B{}{}".format(request.user.pk, generate_number_code(6))
        if buy_form.is_valid():
            for ticket in tickets:
                ticket_form = forms.TicketForm(lottery=lottery, data={
                    "picks": ",".join(["%d" %pick for pick in ticket]),
                    "type": None if type == "null" else type,
                    "batch": batch,
                    "name": request.POST["name"],
                    "phone": request.POST["phone"],
                })
                if ticket_form.is_valid():
                    ticket_object = ticket_form.save(commit=False)
                    ticket_objects.append(ticket_object)
                else:
                    return json_response(False, error=ticket_form.errors)
        else:
            return json_response(False, error=buy_form.errors)
        for ticket in ticket_objects:
            ticket.save()
        transaction = buy_form.save(commit=False)
        transaction.details = "batch number: {}{}".format(batch, ", ticket number: %s" %(ticket_objects[0].reference_number) if len(ticket_objects) == 1 else "")
        transaction.save()
        request.user.balance -= transaction.amount
        request.user.save()
        return json_response(True)
