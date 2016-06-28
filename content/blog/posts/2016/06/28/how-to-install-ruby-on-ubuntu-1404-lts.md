---
title: How to install Ruby on Ubuntu 14.04 LTS
created_at: 2016-06-28T20:23:01Z
published_at: 2016-06-28T22:37:22Z
---

[Ruby](https://www.ruby-lang.org) is a dynamically typed, object-oriented, open
source programming language with a focus on simplicity and productivity.
However, it can be quite challenging to get Ruby installed and set up correctly.
So, for my future self let me walk through my process.

## Tools

I use [rbenv](https://github.com/rbenv/rbenv),
[ruby-build](https://github.com/rbenv/ruby-build) and
[Bundler](http://bundler.io/). There is also [rvm](http://rvm.io/) which can
replace all three tools but I prefer to use [applications that do one thing well](https://www.amazon.com/UNIX-Philosophy-Mike-Gancarz-ebook/dp/B002OL2G4G).

## Install rbenv

**NOTE:** *You'd need to have [Git](https://git-scm.com/) installed to follow
this process. Go here to see [how to install and configure Git on Ubuntu 14.04 LTS](/blog/how-to-install-and-configure-git-on-ubuntu-1404-lts).*

```bash
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
$ . ~/.bashrc

# Check if rbenv was set up
$ type rbenv
rbenv is a function
```

For more details you can read [here](https://github.com/rbenv/rbenv#basic-github-checkout).

## Install Ruby

The [ruby-build](https://github.com/rbenv/ruby-build) plugin for
[rbenv](https://github.com/rbenv/rbenv) handles that task. Let's install it and
then we'd be able to use `rbenv install` to install the version of Ruby we want
to use.

```bash
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

Now, let's list the available Ruby versions and install one of them.

```bash
$ rbenv install --list
Available versions:
  1.9.3-p551
  2.3.1
  2.4.0-dev
  2.4.0-preview1
  jruby-9.1.2.0
  maglev-1.0.0
  rbx-3.42
  ...

# Install dependencies
$ sudo apt-get install -y build-essential libssl-dev libreadline-dev zlib1g-dev

$ rbenv install 2.3.1

# Switch to the installed version
$ rbenv global 2.3.1

# Ensure all shims are in-place
$ rbenv rehash
```

## Upgrade RubyGems

```bash
$ gem update --system
```

## Install Bundler

```bash
$ gem install bundler
```

## An example

Create a directory and `cd` into it.

```bash
$ mkdir first && cd first
```

Add a `Gemfile`.

```rb
# Gemfile

source "https://rubygems.org"

gem "roda"
gem "rack"
```

Add a `config.ru`.

```rb
# config.ru

require "roda"

class App < Roda
  route do |r|
    r.root { "Hello, world!" }
  end
end

run App.freeze.app
```

Finally, install the dependencies and run the web application.

```bash
$ bundle install
$ bundle exec rackup
```

Open your browser and navigate to [http://localhost:9292/](http://localhost:9292/). That's it.

## References

- [Using rbenv to Manage Rubies and Gems](https://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems)
- [Installing Ruby the Correct Way](https://cbednarski.com/articles/installing-ruby/)
