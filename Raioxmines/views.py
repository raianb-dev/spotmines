from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
from django.contrib.auth.decorators import login_required
import json
import requests
from django.http import HttpResponseBadRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def webhook(request):
    if request.method == 'POST':
        # Obter o corpo da solicitação POST
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        # Verificar se a solicitação é do Kiwfy verificando o token do webhook
        webhook_token = request.META.get('HTTP_X_WEBHOOK_TOKEN')
        if webhook_token != 'cid68lja9ua':
            return HttpResponseBadRequest('Token inválido')

        # Extrair informações relevantes da solicitação
        evento = body.get('event')
        venda_id = evento.get('order_id')
        # ...

        # Enviar uma resposta de sucesso ao Kiwfy
        return JsonResponse({'status': 'sucesso'})


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

