from django.db import models
from django.core.validators import RegexValidator


class Post(models.Model):
    '''
    Post about veteran

    FIELDS:
        name - name of veteran
        date - years of life
        description - text aboout the veteran
        image - veteran photo

    META:
        sort by name
        'Пост' is verbose name
        'Посты' is verbose name plural

    METHODS:
        __str__ - return name of veteran
    '''
    name = models.CharField('Ф.И.О ветерана', max_length=100)
    date = models.CharField('Годы жизни', max_length=9,
        validators=[RegexValidator(regex=r'\d-\d'), ],
        help_text='В формате XXX-XXX')
    description = models.TextField('Описание')
    image = models.ImageField('Изображение')

    class Meta:
        ordering = ('name', )
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'

    def __str__(self):
        return self.name

