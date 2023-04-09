import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'serverSettings.settings')
django.setup()

from Raioxmines.views import singup

# Chame a função signup() para criar um novo usuário
singup()