from django.db import models


class Veteran(models.Model):
	name = models.CharField(max_length=100, verbose_name="Ф.И.О Ветерана")
	date = models.CharField(
		max_length=9,
		help_text='Пожалуйста, используйте формат <Дата Рождения>-<Дата Смерти (если человека уже нет)>',
		verbose_name='Дата рождения - смерти'
	)
	info = models.TextField(verbose_name='Описание ветерана')
	image = models.ImageField(upload_to='veterans')

	def __str__(self):
		return self.name


	class Meta:
		verbose_name = 'Ветеран'
		verbose_name_plural = 'Ветераны'