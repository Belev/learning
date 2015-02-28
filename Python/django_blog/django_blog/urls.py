from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.http import HttpResponse
from django.contrib.sitemaps.views import sitemap

from django_blog import views

sitemaps = {
    'posts': views.PostsSitemap
}

urlpatterns = patterns('',

                       url(r'^$', views.index, name='index'),
                       url(r'^about/$', views.about, name='about'),
                       url(r'^contact/$', views.contact, name='contact'),

                       url(r'^post/', include('post.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^robots\.txt$', lambda res: HttpResponse(
                           "User-agent: *\nDisallow: ", content_type="text/plain")),
                       url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}),
                       )

handler404 = views.custom_404
handler500 = views.custom_500
