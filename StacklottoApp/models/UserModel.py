from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, username, email, first_name, last_name, password=None):
        if not username:
            raise ValueError("Username must be set!")
        elif not email:
            raise ValueError('Email must be set!')
        else:
            user = self.model(username=username, email=email, first_name=first_name, last_name=last_name)
            user.set_password(password)
            user.save()
            return user

    def create_superuser(self, username, email, first_name, last_name, password):
        user = self.create_user(username, email, first_name, last_name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user

class UserModel(AbstractBaseUser, PermissionsMixin):

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(null=False, unique=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True)
    date_joined = models.DateTimeField(default=timezone.now)

    phone = models.CharField(max_length=15, null=True, blank=True)
    balance = models.IntegerField(default=0)
    bank_name = models.CharField(max_length=100, blank=True, null=True)
    bank_account_number = models.CharField(max_length=100, blank=True, null=True)
    bank_account_name = models.CharField(max_length=100, blank=True, null=True)
    referee = models.ForeignKey("AffiliateModel", on_delete=models.SET_NULL, null=True, related_name="refferals")

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "username"]

    objects = UserManager()

    def __str__(self):
        return self.get_username()

    @property
    def dict(self):
        return {
            "firstName": self.first_name,
            "lastName": self.last_name,
            "username": self.username,
            "email": self.email,
            "isStaff": self.is_staff,
            "isSuperuser": self.is_superuser,
            "isActive": self.is_active,
            "phone": self.phone,
            "balance": self.balance,
            "bankName": self.bank_name,
            "bankAccountNumber": self.bank_account_number,
            "bankAccountName": self.bank_account_name
            # "verified": self.verification.verified
        }

    class Meta:
        verbose_name = "Account"
        verbose_name_plural = "Accounts"