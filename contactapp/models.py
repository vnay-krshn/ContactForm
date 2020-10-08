from django.db import models
from django.core.validators import MinLengthValidator,EmailValidator
from phone_field import PhoneField

# Create your models here.

class Contacts(models.Model):
    name = models.CharField(max_length = 100, validators=[MinLengthValidator(3, message = "Name should contain minimum 3 characters")])
    email = models.EmailField(validators = [EmailValidator(message = "Enter a valid email")])
    phone = PhoneField(help_text = "Contact phone number")
    description = models.CharField(max_length = 20)

    def __str__(self):
        return self.name
