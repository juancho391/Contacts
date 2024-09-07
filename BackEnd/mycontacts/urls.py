from django.urls import path
from .views import Register, Login, ContactList, CreateContact, Logout, UpdateContact, DeleteContact, SearchContact, ExportContacts
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="API Documentation",
        default_version='v1',
        description="API documentation for MyContacts",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('register/', Register.as_view(), name='Register'),
    path('login/', Login.as_view(), name='Login'),
    path('contact-list/', ContactList.as_view(), name='ContactList'),
    path('create-contact/', CreateContact.as_view(), name='CreateContact'),
    path('logout/', Logout.as_view(), name='Logout'),
    path('update-contact/', UpdateContact.as_view(), name='UpdateContact'),
    path('delete-contact/', DeleteContact.as_view(), name='DeleteContact'),
    path('search-contact/', SearchContact.as_view(), name='SearchContact'),
    path('export-contacts/', ExportContacts.as_view(), name='exportContacts'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
    


