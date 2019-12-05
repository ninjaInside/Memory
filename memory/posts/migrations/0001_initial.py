# Generated by Django 3.0 on 2019-12-05 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Veteran',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Ф.И.О Ветерана')),
                ('date', models.CharField(help_text='Пожалуйста, используйте формат <Дата Рождения>-<Дата Смерти (если человека уже нет)>', max_length=9, verbose_name='Дата рождения - смерти')),
                ('info', models.TextField(verbose_name='Описание ветерана')),
                ('image', models.ImageField(upload_to='veterans')),
            ],
            options={
                'verbose_name': 'Ветеран',
                'verbose_name_plural': 'Ветераны',
            },
        ),
    ]
