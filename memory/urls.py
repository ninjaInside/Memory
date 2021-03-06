from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import RedirectView
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', TemplateView.as_view(template_name='home/index.html'),
        name='home'),
    path('blog/', include('blog.urls')),
    path('accounts/', include('allauth.urls')),
    path('', RedirectView.as_view(url='home/')),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
