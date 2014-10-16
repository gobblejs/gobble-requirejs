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


## License

MIT. Copyright 2014 Rich Harris
