from dataclasses import field
import email
from rest_framework.serializers import ModelSerializer
from base.models import Contact
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import PBKDF2PasswordHasher

class ContactSerializer(ModelSerializer):

    id = serializers.IntegerField(required=False)

    class Meta:
        model = Contact
        
        fields = '__all__'
        
    
    def save(self, user):
        contact = Contact()
        contact.user = user
        self.map_to_contact(contact)
        contact.save()
        return contact
    
    def update(self):
        
        contact = Contact.objects.filter(pk=self.validated_data['id']).first()
        self.map_to_contact(contact)
        contact.save()
        return contact
    
    def map_to_contact(self, contact):
        contact.first_name = self.validated_data['first_name']
        contact.last_name = self.validated_data['last_name']
        if 'email' in self.validated_data:
            contact.email = self.validated_data['email']
        if 'address_line_1' in self.validated_data:
            contact.address_line_1 = self.validated_data['address_line_1']
        if 'address_line_2' in self.validated_data:
            contact.address_line_2 = self.validated_data['address_line_2']
        if 'city' in self.validated_data:
            contact.city = self.validated_data['city']
        if 'state' in self.validated_data:
            contact.state = self.validated_data['state']
        if 'zipcode' in self.validated_data:
            contact.zipcode = self.validated_data['zipcode']
        if 'picture_url' in self.validated_data:
            contact.picture_url = self.validated_data['picture_url']

    def get_validation_exclusions(self):
        exclusions = super(ContactSerializer, self).get_validation_exclusions()
        return exclusions + ['id']


class RegistrationSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['email', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User()
        user.email = self.validated_data['email']
        user.username = self.validated_data['username']
        password = self.validated_data['password']

        hasher = PBKDF2PasswordHasher()
        user.password = hasher.encode(password, "some_salt")
        user.is_active = True
        user.save()
        return user

