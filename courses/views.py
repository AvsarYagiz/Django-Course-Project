from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseNotFound, Http404
from django.urls import reverse
from datetime import date
from .models import Course, Category

data={
    'programlama': 'Programlama kategorisine ait kurslar',
    'programming': 'Programlama kategorisine ait kurslar',
    'web-gelistirme':'Web geliştirme kategorisine ait kurslar',
    'mobil-uygulamalar': 'Mobil geliştirme kategorisine ait kurslar'
}

db={
    'courses':[
        {
            'title':'Javascript Kursu',
            'description':'Javascript kurs açıklaması',
            'imageUrl': 'javascript.jpg',
            'slug':'javascript-kursu',
            'date': date(2023,11,5),
            'isActive':True,
            'isUpdated':True
        },
        {
            'title':'Python Kursu',
            'description':'Python kurs açıklaması',
            'imageUrl': 'python.jpg',
            'slug':'python-kursu',
            'date': date(2023,9,5),
            'isActive':False,
            'isUpdated':True
        },
        {
            'title':'Web Geliştirme Kursu',
            'description':'Web geliştirme kurs açıklaması',
            'imageUrl': 'web.jpg',
            'slug':'web-gelistirme-kursu',
            'date': date(2023,8,5),
            'isActive':True,
            'isUpdated':False
        }
    ],
    'categories':
    [
       {'id':1, 'name': 'programlama', 'slug':'programlama'},
       {'id':2, 'name': 'web geliştirme', 'slug':'web-gelistirme'},
       {'id':3, 'name': 'mobil geliştirme', 'slug':'mobil-uygulamalar'},
        
    ]
}

def index(request):
    #list comphension
    courses=Course.objects.filter(isActive=1)
    categories=Category.objects.all()

    # for course in db['courses']:
    #     if course['isActive']==True:
    #         courses.append(course)


    return render(request, 'courses/index.html' ,{
        'categories':categories,
        'courses':courses
    })
    


def details(request, course_id):
    # try:
    #     course=Course.objects.get(pk=course_id)
    # except:
    #     raise Http404()

    course = get_object_or_404(Course, pk=course_id)


    context={
        'course': course
    }
    return render(request, 'courses/details.html',context)
  



def getCoursesByCategory(request, category_name):
    try:
        category_text=data[category_name]
        return render(request, 'courses/courses.html', {
        'category':category_name, 
        'category_text': category_text
        })
    except:
        return HttpResponseNotFound('Yanlış kategori seçimi')



def getCoursesByCategoryId(request, category_id):
    category_list = list(data.keys())
    if(category_id>len(category_list)):
        return HttpResponseNotFound('Yanlış Kategori Seçimi!')

    category_name=category_list[category_id-1]
    redirect_url=reverse('courses_by_category', args=[category_name])

    return redirect(redirect_url)
