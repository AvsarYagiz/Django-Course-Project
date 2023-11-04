from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse('anasayfa')


def contact(request):
    return HttpResponse('İletişim')

def aboutus(request):
    return HttpResponse('Hakkımızda')