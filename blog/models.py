from django.db import models
from django.core.validators import RegexValidator


class Post(models.Model):
    name = models.CharField('Ф.И.О ветерана', max_length=100, unique=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE,
        verbose_name='Автор')
    is_confirm = models.BooleanField('Подтвержден', default=False)
    date = models.CharField('Годы жизни', max_length=9,
        help_text='В формате XXXX-XXXX')
    description = models.TextField('Описание')
    image = models.ImageField('Изображение')

    class Meta:
        ordering = ('-id', )
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'

    def __str__(self):
        return self.name

