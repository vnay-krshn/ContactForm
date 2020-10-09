from django import forms
from contactapp.models import Contacts

class contactForm(forms.ModelForm):
        class Meta:
          model = Contacts
          fields = '__all__'

