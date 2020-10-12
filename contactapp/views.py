from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework import status

from contactapp.models import Contacts
from django.views.decorators.http import require_POST

# Create your views here.
def index(request):
    return render(request, 'contactapp/index.html')

def fetch(request):
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
      return HttpResponse(status=200)


       



