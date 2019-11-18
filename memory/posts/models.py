from django.db import models


class Veteran(models.Model):
	date = models.CharField(max_length=9)
	about = models.TextField()
	image = models.ImageField(upload_to='photos')