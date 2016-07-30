## About

My website.

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

```bash
# Move to gh-pages
$ git worktree add ../dwaynecrooks.com-dist gh-pages
$ cp -r public/* ../dwaynecrooks.com-dist
$ pushd ../dwaynecrooks.com-dist

# Update
$ git add .
$ git commit -m "Site updated to $(git log --pretty="%h" -n1 master)"

# Deploy
$ git push

# Done
$ popd
```
