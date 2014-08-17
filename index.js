module.exports = function requirejs ( inputDir, outputDir, options, done ) {
	var path = require( 'path' ), r = require( 'requirejs' );

	options = clone( options );

	if ( !options.out ) {
		throw new Error( "The gobble-requirejs config must specify an 'out' property, plus one or more of 'name', 'include' or 'modules'." );
	}

	options.baseUrl = path.join( inputDir, options.baseUrl || '' );
	options.out = path.join( outputDir, options.out );

	r.optimize( options, function () { done(); }, done );
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
