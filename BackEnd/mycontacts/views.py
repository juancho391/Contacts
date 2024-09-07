from django.shortcuts import render, get_object_or_404
from .models import Contact
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import  UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token



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


