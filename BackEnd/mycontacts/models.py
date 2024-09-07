from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=100, unique= True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contacts')

    class Meta:
        ordering = ('name',)

  


    
