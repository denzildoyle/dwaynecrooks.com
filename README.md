# About

The personal website and blog for Dwayne Crooks.

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

## Deploy

First time

```sh
$ git checkout --orphan gh-pages
$ git rm -rf . && rm -rf *
$ echo "Hello, world!" > index.html
$ git add .
$ git commit -m "Initial commit"
$ git push -u origin gh-pages
```

Other times

```sh
# Prepare
$ rm -rf output
$ npm run build
$ NANOC_ENV=production bundle exec nanoc

# Preview
$ bundle exec nanoc view -p 4000

# Move to gh-pages
$ git worktree add ../dwaynecrooks.com-dist gh-pages
$ cp -r output/* ../dwaynecrooks.com-dist
$ pushd ../dwaynecrooks.com-dist

# Preview one more time
$ python -m SimpleHTTPServer

# Update
$ git add .
$ git commit -m "Site updated to $(git log --pretty="%h" -n1 master)"

# Deploy
$ git push

# Done
$ popd
```
