from django.shortcuts import render
from django.contrib.sitemaps import Sitemap

from post.models import Post


def index(request):
    posts = Post.objects.all()
    return render(request, 'index.html', {'posts': posts})


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


class PostsSitemap(Sitemap):
    changefreq = 'daily'
    priority = 1.0

    def items(self):
        return Post.objects.all()

    def lastmod(self, obj):
        return obj.created_on
