# Memory

It's a site about veterans of WWII

## Startup

If you want to run this project on your pc, follow these steps

### Pipenv

Install pip if not already installed

```
sudo apt install python3-pip
```

Install pipenv if not already installed

```
pip3 install pipenv
```

Go to project directory and install all requirements from Pipfile.lock

```
python3 -m pipenv sync
```

Activate shell

```
python3 -m pipenv shell
```

### Run this project on localhost

Run migrations and server

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Run project in local network

Run migrations

```
python manage.py migrate
```

Run server on 0.0.0.0 IP and 8000 port

```
python manage.py runserver 0.0.0.0:8000
```

Then on your phone/PC in network go to browser and connect to ```<your_pc_ip>:8000```. If you don't know IP of your PC, follow this command

```
ip a
```

And inet field is your IP

```
2: enp0s7: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 0f:40:23:0a:82:f1 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.57/24 brd 192.168.1.255 scope global dynamic noprefixroute enp0s7
       valid_lft 24645sec preferred_lft 24645sec
    inet6 fe80::d05f:6a5b:1b65:c008/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

In my case it's ```192.168.1.57```. So, i need to connect to 192.168.1.57:8000
