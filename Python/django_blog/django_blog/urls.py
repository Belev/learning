from django.conf.urls import patterns, include, url
from django.contrib import admin


urlpatterns = patterns('',

                       url(r'^$', 'django_blog.views.index', name='index'),
                       url(r'^about/$', 'django_blog.views.about', name='about'),
                       url(r'^contact/$', 'django_blog.views.contact', name='contact'),
                       url(r'^\w+/$', 'django_blog.views.index'),

                       url(r'^post/', include('post.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       )
