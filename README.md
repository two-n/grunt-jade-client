# grunt-jade-client [![Build Status](https://travis-ci.org/two-n/grunt-jade-client.svg?branch=master)](https://travis-ci.org/two-n/grunt-jade-client)

> A grunt task to compile jade templates into a javascript file (like templates.js) to use on the client

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jade-client --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jade-client');
```

## The "jadeClient" task

### Options

#### options.requireJs
Type: `Boolean`
Default value: `false`

If set to true, then the output file will be a requireJs module.

### Usage Examples

#### Default Options
In this example, we build a single js file called `hello_world.js`, which has the result of two compile jade templates, `hello_world.jade`, and `hola_mundo.jade`.  We have also set requireJs to be `true`, which means we will consume this template as a requireJs module.  In our JavaScript, we can then get the output of the 'hello' template with `JST['hello']`.

```js
grunt.initConfig({
  jadeClient: {
    helloWorld: {
      options: {
        requireJs: true
      },
      files: {
        'tmp/hello_world.js': {
          'hello': 'test/fixtures/templates/hello_world.jade',
          'hola': 'test/fixtures/templates/hola_mundo.jade'
        },
      }
    }
  },
});
```

or in CoffeeScript

```coffee
  jadeClient:
    development:
      options:
        requireJs: true
      files:
        'tmp/hello_world.js':
          'hello': 'test/fixtures/templates/hello_world.jade'
          'hola': 'test/fixtures/templates/hola_mundo.jade'
```

#### In the Browser

Make sure that you have included your compiled template file, as well as runtime.js (copy of the file is on this repo for convenience).

The following code (using jQuery) will render the "hello" template into #target.
````js
$("#target").html(JST["hello"]);
````

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

