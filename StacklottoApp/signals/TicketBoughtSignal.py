from django.dispatch import Signal, receiver

TicketBoughtSignal = Signal(providing_args=["ticket"])

@receiver(TicketBoughtSignal)
def check_winners(sender, **kwargs):
    ticket = kwargs["ticket"]
    lottery = ticket.lottery
    