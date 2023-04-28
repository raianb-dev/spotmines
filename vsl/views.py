from django.shortcuts import render

def vsl(request):
    return render(request, 'index.html')