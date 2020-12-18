from .base import *
import os
from dotenv import load_dotenv

load_dotenv()

DEBUG = False

ALLOWED_HOSTS = [
    "stacklotto.com",
    "159.89.95.181",
    "193.47.69.227"
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', 
        'NAME': os.getenv("DATABASE_NAME"),
        'PASSWORD': os.getenv("DATABASE_PASSWORD"),
        'USER': os.getenv("DATABASE_USER"),
        'HOST': os.getenv("DATABASE_HOST"),   # Or an IP Address that your DB is hosted on
        'PORT': os.getenv("DATABASE_PORT"),
    }
}
