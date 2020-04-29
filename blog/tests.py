from django.urls import reverse
from django.test import TestCase, SimpleTestCase
from django.contrib.auth.models import User

from .models import Post


class HomePageTests(SimpleTestCase):

    def test_homepage_exists(self):
        response = self.client.get('/home/')
        self.assertEqual(response.status_code, 200)

    def test_homepage_by_urlname(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_homepage_template_used(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home/index.html')


class BlogTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser',
                password='secret')
        self.post = Post.objects.create(
                name='Test', author=self.user, date='1921-1980',
                description='Test text',
                image='4eede172d95e5e1a14b75900b11fe734.jpg',
        )

    def test_data_correct(self):
        self.assertEqual(self.post.name, 'Test')
        self.assertEqual(self.post.author.username, self.user.username)
        self.assertEqual(self.post.date, '1921-1980')
        self.assertEqual(self.post.description, 'Test text')
        self.assertEqual(self.post.image.url, '/media/4eede172d95e5e1a14b75900b11fe734.jpg')

