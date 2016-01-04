'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - function options
* @param {String} options.owner - repository owner
* @param {String} options.repo - repository name
* @param {String} [options.host] - repository host
* @param {String} [options.branch] - repository branch
* @param {String} [options.token] - API token
* @param {String} [options.style] - badge style
* @param {String} [options.format] - badge format
* @returns {Error|Null} error object or null
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	opts.owner = options.owner;
	if ( !isString( opts.owner ) ) {
		return new TypeError( 'invalid option. Owner option must be a string. Option: `' + opts.owner + '`.' );
	}
	opts.repo = options.repo;
	if ( !isString( opts.repo ) ) {
		return new TypeError( 'invalid option. Repo option must be a string. Option: `' + opts.repo + '`.' );
	}
	if ( options.hasOwnProperty( 'host' ) ) {
		opts.host = options.host;
		if ( !isString( opts.host ) ) {
			return new TypeError( 'invalid option. Host option must be a string. Option: `' + opts.host + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'branch' ) ) {
		opts.branch = options.branch;
		if ( !isString( opts.branch ) ) {
			return new TypeError( 'invalid option. Branch option must be a string. Option: `' + opts.branch + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'token' ) ) {
		opts.token = options.token;
		if ( !isString( opts.token ) ) {
			return new TypeError( 'invalid option. Token option must be a string. Option: `' + opts.token + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'style' ) ) {
		opts.style = options.style;
		if ( !isString( opts.style ) ) {
			return new TypeError( 'invalid option. Style option must be a string. Option: `' + opts.style + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'format' ) ) {
		opts.format = options.format;
		if ( !isString( opts.format ) ) {
			return new TypeError( 'invalid option. Format option must be a string. Option: `' + opts.format + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
