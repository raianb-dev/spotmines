from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
from django.contrib.auth.decorators import login_required
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import asyncio
from django.contrib.auth.hashers import make_password
from .models import Users


@csrf_exempt
async def webhook(request):
    if request.method == 'POST':
        # Obter o corpo da solicitação POST
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        # Criar um novo usuário
        message = await create_user(body)

        # Retornar uma resposta de sucesso
        return JsonResponse({'message': message}, status=200)

    # Retornar uma mensagem de erro para outras solicitações HTTP
    return JsonResponse({'error': 'Método HTTP não permitido'}, status=405)

async def create_user(data):
    full_name = data.get('Customer', {}).get('full_name', '')
    name_parts = full_name.split(' ')
    first_name = name_parts[0] if name_parts else ''
    last_name = name_parts[-1] if name_parts else ''

    email = data.get('Customer', {}).get('email', '')
    username = email.split('@')[0] if email else ''
    password = username

    new_user = Users(
        name=first_name,
        lastname=last_name,
        username=username,
        email=email,
        password=make_password(password)
    )

    await new_user.save()

    return 'Criado com sucesso!'

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

