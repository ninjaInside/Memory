from django.apps import AppConfig


class BlogConfig(AppConfig):
    '''
    Blog app config class

    ATTRIBUTES:
        name - name of this app. In this case it is 'blog'
        verbose_name - name uses django admin. In this case it is 'Пост'
        verbose_name_plural - plural name uses django admin. In this case it is 'Посты'
    '''
    name = 'blog'
    verbose_name = 'Пост'
    verbose_name_plural = 'Посты'
