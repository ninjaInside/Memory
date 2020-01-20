from django.apps import AppConfig


class BlogConfig(AppConfig):
    '''
    Blog app config class

    ATTRIBUTES:
        name - name of this app. In this case it is 'blog'
        verbose_name - name uses django admin. In this case it is 'Пост'
    '''
    name = 'blog'
    verbose_name = 'Блог'
