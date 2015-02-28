from django.db import models
from django.utils import timezone

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=150, unique=True)
    subtitle = models.CharField(max_length=150, blank=True, default=None)
    created_on = models.DateTimeField(default=timezone.now())
    tags = models.TextField(max_length=500, blank=True, null=True)
    text = models.TextField(max_length=6000, blank=True, null=True)
    author = models.CharField(max_length=50, default='Unknown')
    image_url = models.URLField(
        default='http://oxfordknight.co.uk/wordpress/wp-content/uploads/2012/11/python-programming1.png')

    def get_absolute_url(self):
        return 'blog/%i' % self.pk
