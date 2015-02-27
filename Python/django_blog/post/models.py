from django.db import models
from django.utils import timezone

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=150, unique=True)
    created_on = models.DateTimeField(default=timezone.now())
    tags = models.TextField(max_length=500, blank=True, null=True)
    text = models.TextField(max_length=6000, blank=True, null=True)
    author = models.CharField(max_length=50, default='Unknown')

    def get_absolute_url(self):
        return 'blog/%i' % self.pk
