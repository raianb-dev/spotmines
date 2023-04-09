from django.urls import path
from Raioxmines import views


urlpatterns = [
  path('accounts/login/', views.user_login, name='user_login'),
  path('accounts/home/', views.home, name='home'),
]