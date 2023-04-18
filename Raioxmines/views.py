from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
from django.contrib.auth.decorators import login_required
import json
from django.http import HttpResponseBadRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def kiwfy_webhook(request):
    if request.method == 'POST':
        # Obter o corpo da solicitação POST
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        # Verificar se a solicitação é do Kiwfy
        if body.get('source') != 'kiwfy':
            return HttpResponseBadRequest('Invalid request source')

        # Obter o tipo de evento do Kiwfy
        event_type = body.get('type')

        # Processar o evento do Kiwfy de acordo com o seu tipo
        if event_type == 'message':
            # Obter a mensagem do Kiwfy
            message = body.get('message')
            
            # Lógica de processamento da mensagem aqui
            # ...

            # Retornar uma resposta de sucesso para o Kiwfy
            return JsonResponse({'status': 'success'})

    # Retornar uma resposta de sucesso para outros tipos de solicitações
    return JsonResponse({'status': 'success'})


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

