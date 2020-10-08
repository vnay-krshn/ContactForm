from django.shortcuts import render
from .models import Contacts

# Create your views here.
def index(request):
    return render(request, 'contactapp/index.html')


