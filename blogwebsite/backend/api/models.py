
# Create your models here.
# backend/your_app_name/models.py

from django.db import models

class Review(models.Model):
    review = models.TextField()
    name = models.CharField(max_length=255, default='Unknown')
    rating = models.IntegerField()
    image = models.ImageField(upload_to='reviews/', null=True, blank=True)

