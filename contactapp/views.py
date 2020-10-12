from django.shortcuts import render,redirect
from django.http.response import JsonResponse
from rest_framework import status

from contactapp.models import Contacts
from django.views.decorators.http import require_POST

# Create your views here.
def index(request):
    return render(request, 'contactapp/index.html')

def fetch(request):
   ''' name = request.GET.get('name')
    email = request.GET.get('email')
    phone = request.GET.get('phone')
    description = request.GET.get('description')
    details = {'name': name, 'email': email, 'phone': phone, 'description': description}'''
    items = Contacts.objects.all()
    context = {'items': items}
    return render(request,'contactapp/contactlist.html',context)

@require_POST
def completed(request):
  if request.method == 'POST':
      name = request.POST['name']
      email = request.POST['email']
      phone = request.POST['phone']
      description = request.POST['description']

      Contacts.objects.create(
          name = name,
          email = email,
          phone = phone,
          description = description
      )
      return redirect('index')



       



