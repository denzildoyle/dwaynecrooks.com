# About

My personal website.

# Notes

**Building and viewing the site locally**

```sh
$ nvm use
$ npm install
$ gulp
```

**Building and publishing the site**

```sh
$ rm -rf dist node_modules
$ nvm use
$ npm install
$ NODE_ENV=production gulp build
$ cd dist
$ git init
$ REMOTE_URL=`cd .. && git config --get remote.origin.url`
$ git remote add origin $REMOTE_URL

# If the gh-pages branch isn't on the remote.

# Switch to the gh-pages branch
$ git checkout --orphan gh-pages

# Otherwise, the gh-pages branch is on the remote.

# Switch to the gh-pages branch
$ git fetch origin
$ git checkout gh-pages

# Publish
$ git add --all
$ HEAD=`cd .. && git log --pretty="%h" -n1`
$ git commit -m "Site updated to $HEAD"
$ git push origin gh-pages
```

# Resources

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalize.css](http://necolas.github.io/normalize.css/)
- [Node Version Manager](https://github.com/creationix/nvm)
- [Node](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/)
- [Browsersync](http://www.browsersync.io/)
- [Jade - Template Engine](http://jade-lang.com/)
- [Sass](http://sass-lang.com/)
 - [Breakpoint](http://breakpoint-sass.com/)
- [PostCSS](https://github.com/postcss/postcss)
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
 - [Font Magician](https://github.com/jonathantneal/postcss-font-magician)
