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


SECURE_BROWSER_XSS_FILTER = True

X_FRAME_OPTIONS = 'DENY'

SECURE_SSL_REDIRECT = True

SECURE_HSTS_SECONDS = 314536000

SECURE_HSTS_INCLUDE_SUBDOMAINS = True

SECURE_HSTS_PRELOAD = True

SECURE_CONTENT_TYPE_NOSNIFF = True

SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SECURE = True

SECURE_REFERRER_POLICY = 'origin'
