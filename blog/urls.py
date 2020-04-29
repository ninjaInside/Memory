from django.urls import path

from . import views

urlpatterns = [
    path('', views.PostListView.as_view(), name='post_list'),
    path('change-post/<int:pk>/', views.UpdatePostView.as_view(),
        name='post_change'),
    path('delete-post/<int:pk>/', views.DeletePostView.as_view(),
        name='post_delete'),
    path('add-post/description/', views.DescriptionView.as_view(),
        name='add_post_description'),
    path('add-post/', views.AddPostView.as_view(), name='add_post'),
]
