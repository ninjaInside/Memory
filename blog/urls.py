'''
Blog urls

URLPATTERNS:
    '' - 'blog/', call a PostListView, name - post_list
'''
from django.urls import path

from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.PostListView.as_view(), name='post_list'),
    path('add-post/', views.AddPostView.as_view(), name='add_post'),
]
