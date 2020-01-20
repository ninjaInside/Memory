from django.shortcuts import render
from django.views.generic import ListView

from .models import Post


class PostListView(ListView):
    '''
    List of veteran posts

    ATTRIBUTES:
        model - model class. In this case it is Post
        template_name - name of HTML template. In this case it is 'blog/post_list.html'
    '''
    model = Post
    template_name = 'blog/post_list.html'
