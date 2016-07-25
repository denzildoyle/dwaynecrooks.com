---
title: Installing Python from source on Ubuntu
created_at: 2016-07-06T09:32:06Z
published_at: 2016-07-06T11:02:06Z
---

For whatever reason you may want to use a different version of Python than what came with your Ubuntu distro. However, completely replacing the system version is not recommended. I will show you how to install Python 2.7.x and 3.5.x for the local user on Ubuntu 14.04 LTS.

## Installing Python 2.7.x and/or 3.5.x

```bash
$ export PYTHON_VERSION=2.7.12 # or 3.5.2
# Python-2.7.12 and Python-3.5.2 were the latest versions of Python
# at the time of writing

$ cd /tmp
$ wget https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz
$ tar -zxvf Python-$PYTHON_VERSION.tgz
$ cd Python-$PYTHON_VERSION

$ mkdir -p ~/local/python-$PYTHON_VERSION
$ ./configure --prefix=$HOME/local/python-$PYTHON_VERSION/
$ make

# Optional
$ make test

$ make install
$ ~/local/python-$PYTHON_VERSION/bin/python --version
# or ~/local/python-$PYTHON_VERSION/bin/python3 --version
# for the Python 3 series
```

### Tips

Take a look around while you're in the Python source directory, i.e. `/tmp/Python-$PYTHON_VERSION`.

- Check out the `README` for extra help on the installation process.
- View the configuration help with `./configure --help`.

## Python 2.7.x Quick Start

Let's install [pip](https://pip.pypa.io/en/stable/) and [virtualenv](https://virtualenv.pypa.io/en/stable/).

```bash
# pip
$ cd /tmp
$ wget https://bootstrap.pypa.io/get-pip.py
$ ~/local/python-2.7.12/bin/python get-pip.py
$ ~/local/python-2.7.12/bin/pip --version
8.1.2

# virtualenv
$ ~/local/python-2.7.12/bin/pip install virtualenv
$ ~/local/python-2.7.12/bin/virtualenv --version
15.0.2
```

Finally, we'll start a [Django](https://www.djangoproject.com/) project to check that everything works correctly.

```bash
$ mkdir -p /tmp/django-polls-project
$ cd /tmp/django-polls-project
$ ~/local/python-2.7.12/bin/virtualenv .env
$ . .env/bin/activate

(env) $ pip install django
(env) $ django-admin startproject ... # and you're off to the races
(env) $ ...
(env) $ deactivate
```

**References**

- [Installing pip](https://pip.pypa.io/en/stable/installing/)
- [Installing virtualenv](https://virtualenv.pypa.io/en/stable/installation/)

## Python 3.5.x Quick Start

In this case, `pip` is already installed and a built-in alternative to `virtualenv`, called `pyvenv`, is also already installed. The most we may have to do is to upgrade `pip` when we first activate a new virtual environment.

So, let's start a [Django](https://www.djangoproject.com/) project to check that everything works correctly.

```bash
$ mkdir -p /tmp/django-polls-project
$ cd /tmp/django-polls-project
$ ~/local/python-3.5.2/bin/pyvenv .env
$ . .env/bin/activate

(env) $ pip install -U pip
(env) $ pip install django
(env) $ django-admin startproject ... # and you're off to the races
(env) $ ...
(env) $ deactivate
```

Learn more about virtual environments in Python 3.5.x [here](https://docs.python.org/3.5/tutorial/venv.html).

**References**

- [Upgrading pip](https://pip.pypa.io/en/stable/installing/#upgrading-pip)
