from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def aviatrix(request):
    return render(request, 'aviatrix.html')
