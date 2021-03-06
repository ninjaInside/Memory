from django.urls import reverse_lazy
from django.views.generic import ListView, TemplateView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.exceptions import PermissionDenied
from django.http import HttpResponseRedirect
from django.db.models import Q

from .models import Post


class DescriptionView(TemplateView):
    template_name = 'blog/add_post_description.html'


class PostListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'

    def get_queryset(self):
        return self.model.objects.filter(
            Q(is_confirm=True) | Q(author__username=self.request.user.username)
        )


class DeletePostView(DeleteView):
    model = Post
    template_name = 'blog/post_delete.html'
    success_url = reverse_lazy('post_list')

    def dispatch(self, *args, **kwargs):
        obj = self.get_object()
        if (self.request.user == obj.author and not obj.is_confirm or
                self.request.user.is_staff):
            return super().dispatch(*args, **kwargs)

        raise PermissionDenied


class UpdatePostView(UpdateView):
    model = Post
    fields = ['name', 'date', 'description', 'image']
    template_name = 'blog/change_post.html'
    success_url = reverse_lazy('post_list')

    def dispatch(self, *args, **kwargs):
        obj = self.get_object()
        if (self.request.user == obj.author and not obj.is_confirm or
                self.request.user.is_staff):
            return super().dispatch(*args, **kwargs)

        raise PermissionDenied


class AddPostView(CreateView):
    model = Post
    fields = ['name', 'date', 'description', 'image']
    template_name = 'blog/add_post.html'
    success_url = reverse_lazy('add_post_description')

    def dispatch(self, *args, **kwargs):
        if not self.request.user.is_authenticated:
            raise PermissionDenied

        return super().dispatch(*args, **kwargs)

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = self.request.user
        if obj.author.is_staff:
            obj.is_confirm = True
            obj.save()
            return HttpResponseRedirect(reverse_lazy('post_list'))

        obj.save()
        return HttpResponseRedirect(self.success_url)
