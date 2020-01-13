# Generated by Django 3.0.2 on 2020-01-13 08:43

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Ф.И.О ветерана')),
                ('date', models.CharField(max_length=9, validators=[django.core.validators.RegexValidator(regex='\\d-\\d')], verbose_name='Годы жизни')),
                ('description', models.TextField(verbose_name='Описание')),
                ('image', models.ImageField(upload_to='', verbose_name='Изображение')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
