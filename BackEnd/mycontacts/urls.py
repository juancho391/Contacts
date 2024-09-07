from django.urls import path
from .views import Register, Login, ContactList, CreateContact, Logout, UpdateContact, DeleteContact, SearchContact, ExportContacts

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
]
    


