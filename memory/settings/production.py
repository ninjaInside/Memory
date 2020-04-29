from .base import *

DEBUG = False

ALLOWED_HOSTS = ['memory-veterans.xyz', 'www.memory-veterans.xyz']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'name',
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

STATIC_ROOT = os.path.join(BASE_DIR, 'staitc')

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
