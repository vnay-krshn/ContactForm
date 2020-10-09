from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns=[
    path('',views.index, name = 'index'),
    path('fetch',views.fetch, name ="fetch"),
    path('completed', views.completed, name = 'completed'),
    url(r'^api/contactapp$', views.contactDetails, name = 'contactDetails'),

]