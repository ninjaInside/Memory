from .base import *

DEBUG = False

ALLOWED_HOSTS = [
    'memory-veterans.xyz',
    'www.memory-veterans.xyz',
    '94.103.88.74',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': get_env_variable('DJANGO_DB_NAME'),
        'USER': get_env_variable('DJANGO_DB_USER'),
        'PASSWORD': get_env_variable('DJANGO_DB_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '',
    }
}
