from django.shortcuts import render

from .models import Veteran


def posts(request):
    veterans = Veteran.objects.all()
    return render(request, 'posts/posts.html', {'veterans': veterans})