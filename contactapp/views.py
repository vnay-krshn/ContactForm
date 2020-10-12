from django.shortcuts import render,redirect
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from .forms import contactForm
from django.http import HttpResponse

from contactapp.models import Contacts
from contactapp.serializer import ContactSerializer
from rest_framework.decorators import api_view
from django.views.decorators.http import require_POST

# Create your views here.
def index(request):
    items = Contacts.objects.all()
    context = {'items': items}
    return render(request, 'contactapp/index.html',context)

def fetch(request):
    
    name = request.GET.get('name')
    email = request.GET.get('email')
    phone = request.GET.get('phone')
    description = request.GET.get('description')
    details = {'name': name, 'email': email, 'phone': phone, 'description': description}
    if request.is_ajax():
        return JsonResponse(details,status=200)

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



       



