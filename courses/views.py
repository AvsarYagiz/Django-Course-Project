from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return HttpResponse('anasayfa')

def courses(request):
    return HttpResponse('Kurslar Listesi')
