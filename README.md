# About

The personal website for Dwayne Crooks.

## Workflow

Set up the project and start the processes

```sh
$ cd $PROJECT_ROOT
$ nvm use
$ npm install
$ bundle install
$ bundle exec foreman start
```

### Create a draft post

Examples

```sh
$ bundle exec rake make_draft
$ bundle exec rake make_draft[Hello]
$ bundle exec rake make_draft["Hello\, world\!"]
```

### Publish a draft post

Examples

```sh
$ bundle exec rake publish
$ bundle exec rake publish[h]
$ bundle exec rake publish[hello]
```
