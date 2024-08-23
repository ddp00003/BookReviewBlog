from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from django.http import HttpResponseRedirect
from django.conf import settings
from django.conf.urls.static import static
from api import views

router = routers.DefaultRouter()
router.register(r'reviews', views.ReviewViewSet,basename='review')  # Update with your viewset

urlpatterns = [
    path('api/', include(router.urls)),  # Correctly include the router URLs
    path('admin/', admin.site.urls),
    path('', lambda request: HttpResponseRedirect('/api/')),  # Redirect root URL to api/
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
