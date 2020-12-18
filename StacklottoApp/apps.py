from django.apps import AppConfig


class StacklottoappConfig(AppConfig):
    name = 'StacklottoApp'
    verbose_name = "StackLotto"

    def ready(self):
        from . import signals