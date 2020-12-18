from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from .controllers.AccountsController import AccountsController
from .controllers.FaqController import FaqController
from .controllers.NewsLetterSubscriptionController import NewsLetterSubscriptionController
from .controllers.ContactController import ContactController
from .controllers.TransactionsController import TransactionsController
from .controllers.AffiliateController import AffiliateController
from .controllers.LotteryController import LotteryController

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
