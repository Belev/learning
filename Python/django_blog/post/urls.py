from django.conf.urls import patterns, url
from post import views

urlpatterns = patterns('',
                       url(r'^$', views.index, name='index'),
                       url(r'^(?P<post_id>\d+)/$', views.post_detail, name='post_detail'),
                       )
