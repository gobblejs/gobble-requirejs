module.exports = function requirejs ( inputdir, outputdir, options, callback ) {
	var path = require( 'path' ), r = require( 'requirejs' );

	if ( !options.out ) {
		throw new Error( "The gobble-requirejs config must specify an 'out' property, plus one or more of 'name', 'include' or 'modules'." );
	}

	options.baseUrl = path.join( inputdir, options.baseUrl || '' );
	options.out = path.join( outputdir, options.out );

	r.optimize( options, function () { callback(); }, callback );
};
