from django.urls import path
from Raioxmines import views
from vsl import views as views_vsl
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('vsl/', views_vsl.vsl, name='vsl'),

  path('login/', views.user_login, name='user_login'),
  path('home/', views.home, name='home'),
  path('', views.welcome, name='welcome'),
  path('nostar/', views.get_star_image, name='get_star_image'),
  path('star/', views.get_star_image_star, name='get_star_image_star'),
  path('webhooks', views.webhook, name='webhook')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)