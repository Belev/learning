from django.conf.urls import patterns, include, url
from django.contrib import admin


urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^post/', include('post.urls')),
                       url(r'^$', 'post.views.index'),
                       url(r'^\w+/$', 'post.views.index'),
                       )
