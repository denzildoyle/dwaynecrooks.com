---
title: Getting Started with Django
created_at: 2016-07-22T10:58:59Z
published_at: 2016-07-25T00:39:08Z
---

[Django](https://www.djangoproject.com/) is to [Python](https://www.python.org/) as [Rails](http://rubyonrails.org/) is to [Ruby](https://www.ruby-lang.org). But, way better and less bloated :). In this post, I will show you how to get started with Django on Ubuntu 14.04 LTS.

## Install Python

The first thing we'd need to do is install Python. Read [here](/blog/installing-python-from-source-on-ubuntu) to find out how to do that.

## Install Django

Here are the steps you can take when beginning a new Django project, say `polls_project`.

```bash
$ mkdir polls_project
$ cd polls_project
$ ~/local/python-3.5.1/bin/pyvenv .env
$ . .env/bin/activate

(.env) $ pip install -U pip
(.env) $ pip install django
(.env) $ django-admin startproject polls
```

Before making anymore changes test that it works and then put everything under [version control](/blog/how-to-install-and-configure-git-on-ubuntu).

```bash
# Test that it all works
(.env) $ cd polls
(.env) $ python manage.py migrate
(.env) $ python manage.py runserver
(.env) $ xdg-open http://127.0.0.1:8000/

# Prepare before putting in version control
(.env) $ cd ..
(.env) $ pip freeze > requirements.txt
(.env) $ echo -e ".env\n__pycache__\n*.pyc\ndb.sqlite3" > .gitignore

# Put it in version control
(.env) $ git init
(.env) $ git add .
(.env) $ git commit -m "Initial commit"
```

Now that we have the base installation working and tracked let's begin setting up the database.

## Configure PostgreSQL

Django defaults to [SQLite](http://www.sqlite.org/) but eventually we'd want to host the site on [Heroku](https://www.heroku.com/) and use [PostgreSQL](https://www.postgresql.org/) as the production database. For a [variety of reasons](http://12factor.net/dev-prod-parity), it's not wise to use different databases in different environments. So to avoid future problems let's setup PostgreSQL locally.

I assume you already have PostgreSQL installed. If not, then you can follow the instructions [here](https://www.postgresql.org/download/linux/ubuntu/) for your distribution.

**Step 1**

Install `psycopg2`. See [here](http://initd.org/psycopg/docs/install.html#use-a-python-package-manager) for more details.

```bash
(.env) pip install psycopg2
```

**Step 2**

Create the database, say `polls_development`.

```bash
(.env) createdb -O [user] polls_development
```

**Step 3**

Change the database setting in `polls/polls/settings.py`.

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'polls_development',
        'USER': '[user]',
        'PASSWORD': '********',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}
```

**Tip:** *If you want to connect without specifying a user and password then use the following setting.*

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'polls_development'
    }
}
```

**NOTE:** *Without specifying a `HOST` `psycopg2` will connect using a Unix socket in the same manner as psql. When you specify a `HOST`, `psycopg2` will connect with TCP/IP, which requires a password. ([ref](http://stackoverflow.com/a/23871618/391924))*

Now, we can migrate the db, create a super user, start the server and view the admin page to see that everything was set up correctly.

```bash
(.env) $ cd polls
(.env) $ python manage.py migrate
(.env) $ python manage.py createsuperuser
(.env) $ python manage.py runserver
(.env) $ xdg-open http://localhost:8000/admin
```

## Wrap up

Update your `requirements.txt` file and commit all your changes to this point.

```bash
(.env) $ pip freeze > requirements.txt
(.env) $ git add .
(.env) $ git commit -m "Configure a PostgreSQL database"
```

## Resources

- [Django Girls Tutorial](http://tutorial.djangogirls.org/en/)
- [Django Documentation](https://docs.djangoproject.com/en/1.9/)
  - [Settings](https://docs.djangoproject.com/en/1.9/ref/settings/)
    - [DATABASES](https://docs.djangoproject.com/en/1.9/ref/settings/#databases)
  - [django-admin](https://docs.djangoproject.com/en/1.9/ref/django-admin/)
    - [migrate](https://docs.djangoproject.com/en/1.9/ref/django-admin/#django-admin-migrate)
    - [createsuperuser](https://docs.djangoproject.com/en/1.9/ref/django-admin/#django-admin-createsuperuser)
    - [runserver](https://docs.djangoproject.com/en/1.9/ref/django-admin/#django-admin-runserver)
- [requirements.txt](https://pip.pypa.io/en/stable/user_guide/#requirements-files)
