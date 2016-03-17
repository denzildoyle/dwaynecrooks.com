# About

The personal website for Dwayne Crooks.

# Notes

**Working on the site locally**

```sh
$ git clone https://github.com/dwayne/dwaynecrooks.com.git
$ cd dwaynecrooks.com
$ nvm use
$ npm install

# Terminal 1
$ npm run watch

# Terminal 2
$ npm run server
```

**Build**

```sh
$ npm run build
```

**Deploy**

First time

```sh
$ git checkout --orphan gh-pages
$ git rm -rf .
$ echo "Hello, world!" > index.html
$ git add .
$ git commit -m "Initial commit"
$ git push -u origin gh-pages
```

Other times

```sh
$ git worktree add ../dwaynecrooks.com-dist gh-pages
$ cp -r dist/* src/CNAME ../dwaynecrooks.com-dist
$ pushd ../dwaynecrooks.com-dist
$ git add .
$ git commit -m "Site updated to $(git log --pretty="%h" -n1 master)"
$ git push
$ popd
```

# Resources

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Normalize.css](http://necolas.github.io/normalize.css/)
- [Node Version Manager](https://github.com/creationix/nvm)
- [Node](https://nodejs.org/en/)
- [Browsersync](http://www.browsersync.io/)
- [Jade - Template Engine](http://jade-lang.com/)
- [Sass](http://sass-lang.com/)
- [PostCSS](https://github.com/postcss/postcss)
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
 - [Font Magician](https://github.com/jonathantneal/postcss-font-magician)

# License

This project is licensed under the MIT license.

See [LICENSE](/LICENSE) for the full license text.
