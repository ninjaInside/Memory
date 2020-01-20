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
        'Post' is verbose name

    METHODS:
        __str__ - return name of veteran
    '''
    name = models.CharField('Ф.И.О ветерана', max_length=100)
    date = models.CharField('Годы жизни', max_length=9,
        validators=(RegexValidator(regex=r'\d-\d'), ))
    description = models.TextField('Описание')
    image = models.ImageField('Изображение')

    class Meta:
        ordering = ('name', )
        verbose_name = 'Post'

    def __str__(self):
        return self.name

