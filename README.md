# Grunt Test

Messing around a bit on some Grunt stuff. Just scratching the surface really.

For now, getting a [Mocha](http://visionmedia.github.com/mocha/) testing setup
that can run the same tests in 3 different contexts:

1. In actual browser (using `runner.html` file)
2. In headless browser (via PhantomJS, using `grunt mocha` command)
3. In node (using `npm test` command)

## Getting Started

There's not much here, but for anything to work, you will need to

    npm install

If you don't have node and npm installed, you'll have to Google how to do that.

To run the tests in a browser, you'll have to serve it from a simple webserver.
Apache would do just fine. Navigate to
`http://[server_root]/js/tests/runner.html`

## TODO

- Make a more consistent CLI interface for the last two cases, and where possible, reduce redundancy.
- Add some build steps for JSHint, css-lint, optimization and minification.
- Look into how this could work with optimized AMD modules and possibly [almond](https://github.com/jrburke/almond).

## Thanks

Rebecca Murphey, from whose excellent
[js-assessment](https://github.com/rmurphey/js-assessment) project I borrowed
several useful concepts.

Kelly Miyashiro, who developed
[grunt-mocha](https://github.com/kmiyashiro/grunt-mocha).

Finally, of course, all the developers behind Grunt, RequireJS, Mocha,
Expect.js, Backbone, Underscore, and jQuery.
