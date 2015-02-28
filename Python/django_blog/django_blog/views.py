from django.shortcuts import render
from django.contrib.sitemaps import Sitemap

from post.models import Post


def index(request, page_number=''):
    POSTS_ON_PAGE = 4

    if not page_number:
        page_number = 0

    page_number = int(page_number)
    from_index = page_number * POSTS_ON_PAGE
    to_index = from_index + POSTS_ON_PAGE
    posts = Post.objects.order_by('-created_on')[from_index:to_index]

    next_page_number = page_number + 1
    return render(request, 'index.html', {'posts': posts, 'next_page_number': next_page_number})


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def custom_404(request):
    return render(request, 'error/404.html')


def custom_500(request):
    return render(request, 'error/500.html')


class PostsSitemap(Sitemap):
    changefreq = 'daily'
    priority = 1.0

    def items(self):
        return Post.objects.all()

    def lastmod(self, obj):
        return obj.created_on
