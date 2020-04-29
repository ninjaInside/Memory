from django.urls import reverse_lazy
from django.views.generic import ListView, TemplateView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.http import HttpResponseRedirect, Http404

from .models import Post


class DescriptionView(TemplateView):
    template_name = 'blog/add_post_description.html'


class PostListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'

    def get_queryset(self):
        return self.model.objects.filter(is_confirm=True)


class DeletePostView(DeleteView):
    model = Post
    template_name = 'blog/post_delete.html'
    success_url = reverse_lazy('post_list')

    def dispatch(self, *args, **kwargs):
        obj = self.get_object()
        if (self.request.user.username == obj.author.username or
                self.request.user.is_staff):
            return super().dispatch(*args, **kwargs)
        else:
            raise Http404('Чо, самый дерзкий? А ну иди сюда, сосунок!')


class UpdatePostView(UpdateView):
    model = Post
    fields = ['name', 'date', 'description', 'image']
    template_name = 'blog/change_post.html'
    success_url = reverse_lazy('post_list')

    def dispatch(self, *args, **kwargs):
        obj = self.get_object()
        if (self.request.user.username == obj.author.username or
                self.request.user.is_staff):
            return super().dispatch(*args, **kwargs)
        else:
            raise Http404('Чо, самый дерзкий? А ну иди сюда, сосунок!')


class AddPostView(CreateView):
    model = Post
    fields = ['name', 'date', 'description', 'image']
    template_name = 'blog/add_post.html'
    success_url = reverse_lazy('add_post_description')

    def dispatch(self, *args, **kwargs):
        if not self.request.user.is_authenticated:
            raise Http404('You need to be logged in')

        return super().dispatch(*args, **kwargs)

    def form_valid(self, form, *args, **kwargs):
        obj = form.save(commit=False)
        obj.author = self.request.user
        if obj.author.is_staff:
            obj.is_confirm = True
            obj.save()
            return HttpResponseRedirect(reverse_lazy('post_list'))
        obj.save()
        return HttpResponseRedirect(self.success_url)
