from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.http import HttpResponse


urlpatterns = patterns('',

                       url(r'^$', 'django_blog.views.index', name='index'),
                       url(r'^about/$', 'django_blog.views.about', name='about'),
                       url(r'^contact/$', 'django_blog.views.contact', name='contact'),

                       url(r'^post/', include('post.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^robots\.txt$', lambda res: HttpResponse(
                           "User-agent: *\nDisallow: ", content_type="text/plain"))
                       )
