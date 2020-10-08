from django import forms
from contactapp.models import Contacts
from django.core.validators import MinLengthValidator,EmailValidator
from phonenumber_field.modelfields import PhoneNumberField

class contactForm(forms.Form):
        name = forms.CharField(max_length=100, validators=[MinLengthValidator(3, message = "Name should contain minimum 3 characters")])
        email = forms.EmailField(validators = [EmailValidator(message = "Enter a valid email")])
        phone = PhoneNumberField()
        description = forms.CharField(max_length=20)

    #9897867876
