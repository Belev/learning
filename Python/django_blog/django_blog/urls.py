from django.conf.urls import patterns, include, url
from django.contrib import admin


urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^post/', include('post.urls')),

                       url(r'^$', 'django_blog.views.index'),
                       url(r'^about/$', 'django_blog.views.about'),
                       url(r'^contact/$', 'django_blog.views.contact'),
                       url(r'^\w+/$', 'django_blog.views.index'),
                       )
