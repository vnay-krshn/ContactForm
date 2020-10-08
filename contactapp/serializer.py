from rest_framework import serializers
from contactapp.models import Contacts

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contacts
        fields = ['id', 'name', 'email', 'phone', 'description']