from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def mines(request):
    return render(request,'mines.html')
