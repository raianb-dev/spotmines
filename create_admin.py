import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '_serverSettings.settings')
django.setup()

from login.views import singup

# Chame a função signup() para criar um novo usuário
singup()