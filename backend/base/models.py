from django.db import models
from django.contrib.auth.models import User
  
# Create your models here.

class Contact(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.CharField(max_length=40,blank=True, null=True)
    address_line_1 = models.CharField(max_length=40,blank=True, null=True)
    address_line_2 = models.CharField(max_length=40,blank=True, null=True)
    city = models.CharField(max_length=20,blank=True, null=True)
    state = models.CharField(max_length=20,blank=True, null=True)
    zipcode = models.CharField(max_length=20,blank=True, null=True)
    picture_url = models.CharField(max_length=50,blank=True, null=True)
