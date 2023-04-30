from django.urls import path
from login import views
from vsl import views as views_vsl
from home import views as views_home
from django.conf import settings
from django.conf.urls.static import static
from django.urls import reverse_lazy
from django.contrib.auth.views import LogoutView
from django.contrib.auth.views import LoginView
urlpatterns = [
  path('vsl/', views_vsl.vsl, name='vsl'),
path('logout', LogoutView.as_view(next_page=reverse_lazy('user_login')), name='logout'),
  path('login/', views.user_login, name='user_login'),
  path('home/', views_home.home, name='home'),
  path('', views.user_login, name='welcome'),
  path('nostar/', views.nostar, name='nostar'),
  path('star/', views.star, name='star'),
  path('webhooks', views.webhook, name='webhook')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)