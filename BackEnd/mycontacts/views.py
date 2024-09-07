from django.shortcuts import render, get_object_or_404
import csv
from io import StringIO
from .models import Contact
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import  UserSerializer, ContactSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import authentication, permissions
from django.http import HttpResponse


# Create your views here.

class Register(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data.get('username'))
            user.set_password(request.data.get('password'))
            user.save()

            token = Token.objects.create(user=user)

            return Response({'message' : 'user registered successfully',
                            'token' : token.key,
                            'status' : status.HTTP_200_OK,
                            'user' : serializer.data})
        
        return Response({'message' : 'error',
                         'error' : serializer.errors,
                         'status' : status.HTTP_400_BAD_REQUEST})
    


class Login(APIView):
    def post(self, request):
        user = get_object_or_404(User, username=request.data.get('username'))
        if not user.check_password(request.data.get('password')):
            return Response({'message' : "invalid password",
                             'status' : status.HTTP_400_BAD_REQUEST})
        token, created = Token.objects.get_or_create(user=user)
        return Response({'message' : 'login successful',
                         'token' : token.key,
                         'status' : status.HTTP_200_OK,
                         'user' : UserSerializer(user).data})
    
class Logout(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({'message' : 'logout successful',
                         'status' : status.HTTP_200_OK})



class ContactList(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):
        contacts = Contact.objects.filter(user=request.user.id)
        serializer = ContactSerializer(contacts, many=True)
        return Response({'message' : 'contact list',
                         'contacts' : serializer.data,
                         'status' : status.HTTP_200_OK})
    
    
class CreateContact(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'message' : 'contact created successfully',
                             'contact' : serializer.data,
                             'status' : status.HTTP_200_OK})
        return Response({'message' : 'error',
                         'error' : serializer.errors,
                         'status' : status.HTTP_400_BAD_REQUEST})
    

class UpdateContact(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request):
        print(request.data)
        contact = get_object_or_404(Contact, phone_number=request.data.get('phone_number'), user=request.user.id)
        if request.data.get('new_phone_number'):
            request.data['phone_number'] = request.data.pop('new_phone_number')
        serializer = ContactSerializer(contact, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message' : 'contact updated successfully',
                             'contact' : serializer.data,
                             'status' : status.HTTP_200_OK})
        return Response({'message' : 'error',
                         'error' : serializer.errors,
                         'status' : status.HTTP_400_BAD_REQUEST})
        


class DeleteContact(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def delete(self,request):
        contact  = get_object_or_404(Contact, phone_number=request.data.get('phone_number'), user=request.user.id)
        contact.delete()
        return Response({'message' : 'contact deleted successfully',
                         'status' : status.HTTP_200_OK})
    
class SearchContact(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.data.get('name'):
            contacts = Contact.objects.filter(user=request.user.id, name__icontains=request.data.get('name'))
        elif request.data.get('phone_number'):
            contacts = Contact.objects.filter(user=request.user.id, phone_number__icontains=request.data.get('phone_number'))
        else:
            return Response({'message' : 'no search criteria provided',
                             'status' : status.HTTP_400_BAD_REQUEST})
        serializer = ContactSerializer(contacts, many=True)
        return Response({'message' : 'contact list',
                         'contacts' : serializer.data,
                         'status' : status.HTTP_200_OK})
    

class ExportContacts(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        
        # Obtener los contactos del usuario autenticado
        contacts = Contact.objects.filter(user=request.user.id)
        serializer = ContactSerializer(contacts, many=True)

        # Usar StringIO para crear el archivo CSV en memoria
        csv_buffer = StringIO()
        csv_writer = csv.writer(csv_buffer)

        # Escribir el encabezado
        csv_writer.writerow(['name', 'phone_number', 'email'])

        # Escribir los datos de los contactos
        for contact in serializer.data:
            csv_writer.writerow([contact['name'], contact['phone_number'], contact['email']])
        
        # Obtener el contenido del archivo CSV
        csv_content = csv_buffer.getvalue()
        csv_buffer.close()

        # Crear la respuesta con el contenido del CSV
        response = HttpResponse(
            csv_content,
            content_type='text/csv',
            headers={'Content-Disposition': 'attachment; filename="contacts.csv"'}
        )
        
        return response