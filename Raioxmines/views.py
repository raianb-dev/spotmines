from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
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
