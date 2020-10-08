from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns=[
    path('',views.index, name = 'index'),
    url(r'^api/contactapp$', views.contactDetails, name = 'contactDetails'),

]