from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from .AccountsController import AccountsController
from .FaqController import FaqController
from .NewsLetterSubscriptionController import NewsLetterSubscriptionController
from .ContactController import ContactController
from .TransactionsController import TransactionsController
from .AffiliateController import AffiliateController
from .LotteryController import LotteryController

urlpatterns = [
    path("accounts/", AccountsController()),
    path("faq/", FaqController()),
    path("news/", NewsLetterSubscriptionController()),
    path("contact/", ContactController()),
    path("transactions/", TransactionsController()),
    path("affiliates/", AffiliateController()),
    path("lotteries/", LotteryController()),
] + [
    re_path(r"^.*$", TemplateView.as_view(
        template_name="StacklottoApp/%s.html" %("debug" if settings.DEBUG else "index")
    ))
]