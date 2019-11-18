from django.http import HttpResponse
from django.shortcuts import render

from .models import *


def posts_list(request):
	veterans = Veteran.objects.all()
	return render(request, 'posts/index.html', context={'veterans': veterans})