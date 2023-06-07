from django.shortcuts import render

def vsl(request):
    return render(request, 'index.html')

def vslclear(request):
    return render(request, 'vsl-clean.html')