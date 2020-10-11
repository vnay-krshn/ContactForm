from django.db import models

# Create your models here.

class Contacts(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField()
    phone = models.CharField(null=True,max_length=10)
    description = models.TextField()

    def __str__(self):
        return self.name
