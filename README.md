# Memory

This is a site about WWII veterans

## Startup

If you want to run this project on your pc, follow these steps

### Virtualenv

Create directory for virtualenv

```
mkdir .envs
```

Install virtualenv if not already installed

```
pip3 install virtualenv
```

Create virtualenv

```
python3 -m virtualnv memoryenv
```

Activate this env

```
source memoryenv/bin/activate
```

### Download project

Exit from env directory and clone this git repository

```
cd ../
git clone https://github.com/ninjaInside/Memory.git
```

### Pip requirements

Cd in project directory and install all requirements of this project

```
pip install -r requirements.txt
```

### Start this project on localhost

Make migrations and run Django server

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
