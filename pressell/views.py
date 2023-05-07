from django.shortcuts import render

def pressell(request):
    return render(request, "pressel.html")

def pressell_pixel(request):
    return render(request, "pressell-pixel.html")