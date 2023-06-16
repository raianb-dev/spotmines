from django.shortcuts import render

def grid(request):
    return render(request, 'grid.html')
