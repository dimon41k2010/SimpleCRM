from django.urls import path,re_path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),
    path('contacts/', views.getContacts),
    re_path(r'^contacts/(?P<id>[0-9]+)/', views.getContactsId),
    path('register/', views.registration_view),
    path('upload-excel/', views.upload_file_view),
    path('export-excel/', views.export_file_view),
    path('send-postcard/', views.send_postcard_view),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]