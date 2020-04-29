# Memory

It's a site about veterans of WWII

## Startup

If you want to run this project on your pc, follow these steps

### Pipenv

Install pipenv if not already installed

```
pip3 install pipenv
```

Install all requirements from Pipfile.lock and create a virtualenv

```
python3 -m pipenv sync
```

Activate shell

```
python3 -m pipenv shell
```

### Start this project on localhost

Make migrations and run Django server

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
