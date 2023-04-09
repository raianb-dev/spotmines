from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class Users(AbstractBaseUser):
    name = models.TextField(max_length=255)
    lastname = models.TextField(max_length=255)
    username = models.TextField(unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.TextField(max_length=255)
    
    REQUIRED_FIELDS = ['email']
    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username

    def get_full_name(self):
        return f"{self.name} {self.lastname}"

    def get_short_name(self):
        return self.name