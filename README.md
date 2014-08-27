# gobble-requirejs

Optimise AMD modules with gobble and [RequireJS](http://requirejs.org).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-requirejs
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'requirejs', {
  name: 'app',
  out: 'app.js'
});
```

The second argument is passed straight through to the [RequireJS Optimizer](http://requirejs.org/docs/optimization.html), except that the `baseUrl` and `out` options are modified to point to the temporary folders managed by gobble.


## Source code

```js
module.exports = function requirejs ( inputDir, outputDir, options, done, err ) {
  var path = require( 'path' ), r = require( 'requirejs' );

  options = clone( options );

  if ( !options.out ) {
    throw new Error( "The gobble-requirejs config must specify an 'out' property, plus one or more of 'name', 'include' or 'modules'." );
  }

  options.baseUrl = path.join( inputDir, options.baseUrl || '' );
  options.out = path.join( outputDir, options.out );

  r.optimize( options, done, err );
};

function clone ( source ) {
  var target = {}, key;

  for ( key in source ) {
    if ( source.hasOwnProperty( key ) ) {
      target[ key ] = source[ key ];
    }
  }

  return target;
}
```


## License

MIT. Copyright 2014 Rich Harris
