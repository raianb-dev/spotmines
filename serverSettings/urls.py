from django.urls import path
from Raioxmines import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('login/', views.user_login, name='user_login'),
  path('home/', views.home, name='home'),
  path('', views.welcome, name='welcome'),

  path('', views.webhoks, name='webhoks')
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)