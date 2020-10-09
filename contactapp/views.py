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
    return render(request, 'contactapp/index.html', context)

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

@api_view(['GET','POST'])

def contactDetails(request):
    if request.method == 'GET':
        contacts = Contacts.objects.all()
        name = request.GET.get('name', None)
        if name is not None:
            contacts = contacts.filter(name_icontains = name)
        contactSerial = ContactSerializer(contacts, many= True)
        return JsonResponse(contactSerial.data, safe = False)
    
    elif request.method == 'POST':
        contactData = JSONParser().parse(request)
        contactSerial = ContactSerializer(data = contactData)
        if contactSerial.is_valid():
            contactSerial.save()
            return JsonResponse(contactSerial.data, status = status.HTTP_201_CREATED)
        return JsonResponse(contactSerial.errors, status = status.HTTP_400_BAD_REQUEST)

       



