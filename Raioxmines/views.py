from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
from django.contrib.auth.decorators import login_required
import json



def webhook(request):
    if request.method == 'POST':
        # Obter o corpo da solicitação POST
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        # Armazenar os dados em uma variável JSON
        data = body['data']

        # Lógica de manipulação de webhook aqui
        # ...

        return data

@login_required
def home(request):
    return render(request, 'home.html')

@login_required
def welcome(request):
    return render(request, 'home.html')


def user_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        q_email = Users.objects.filter(email=email)
  
        if q_email.exists():
            user = q_email.first()
            if password == user.password:
                return render(request, 'home.html')
            else:
                messages.error(request, 'Senha incorreta!')
        else:
            messages.error(request, 'Email não cadastrado!')
        return render(request, 'login.html')
    return render(request, 'login.html')

def g_hack(request):
    return render(request, 'home.html')



def singup():
 
    new_user = Users()
    new_user.name = 'admin'
    new_user.lastname = 'admin'
    new_user.username = 'admin'
    new_user.email = 'admin@admin.com'
    new_user.password = "admin"
    new_user.save()
    return 'Criado com sucesso!'

