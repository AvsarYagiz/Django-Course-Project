from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('home', views.home),
    path('hakkimizda', views.aboutus),
    path('iletisim', views.contact)
]

