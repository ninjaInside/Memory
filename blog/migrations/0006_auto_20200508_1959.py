# Generated by Django 3.0.5 on 2020-05-08 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20200429_1610'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date',
            field=models.CharField(help_text='В формате XXXX-XXXX', max_length=9, verbose_name='Годы жизни'),
        ),
    ]