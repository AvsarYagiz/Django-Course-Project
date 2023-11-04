from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def courses(request):
    return HttpResponse('Kurslar Listesi')
    
def details(request, course_name):
    return HttpResponse(f'{str.capitalize(course_name)} Detay')
    return HttpResponse('Mobile Uygulama Kursları')

def getCoursesByCategory(request, category_name):
    text=''
    if(category_name=='programlama'):
        text='Programlama kategorisine ait kurslar'
    elif(category_name=='web-gelistirme'):
            text='Web geliştirme kategorisine ait kurslar'
    else:
        text='Yanlış kategori seçimi'
    return HttpResponse(text)


def getCoursesByCategoryId(request, category_id):
   return HttpResponse(category_id)
