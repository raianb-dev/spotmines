from django.shortcuts import render

def redirect(request):
    return render(request,'page_wapp.html')

def redirect_next(request):
    return render(request, "page_wapp_pixel.html")