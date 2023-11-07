from django.urls import path
from . import views
from .views import CourseList, CategoryList

urlpatterns = [
    path('', views.index),
    path('<str:slug>', views.details, name='course_details'),
    path('category/<int:category_id>', views.getCoursesByCategoryId),
    path('category/<str:category_name>', views.getCoursesByCategory, name="courses_by_category"),
    path('api/course/', CourseList.as_view(), name='coursemodel-list'),
    path('api/category/', CategoryList.as_view(), name='categorymodel-list'),

]

