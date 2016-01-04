'use strict';

// MODULES //

var mustache = require( 'mustache' );
var validate = require( './validate.js' );


// TEMPLATES //

var URL = 'https://codecov.io/{{host}}/{{owner}}/{{repo}}?branch={{branch}}';
var IMAGE = 'https://img.shields.io/codecov/c/{{host}}/{{owner}}/{{repo}}/{{branch}}.{{format}}?style={{style}}';
var PRIVATE_IMAGE = 'https://img.shields.io/codecov/c/token/{{token}}/{{host}}/{{owner}}/{{repo}}/{{branch}}.{{format}}?style={{style}}';

mustache.parse( URL );
mustache.parse( IMAGE );
mustache.parse( PRIVATE_IMAGE );


// URLS //

/**
* FUNCTION: urls( options )
*	Creates Shields.io badge URLs.
*
* @param {Object} options - function options
* @param {String} options.owner - repository owner
* @param {String} options.repo - repository name
* @param {String} [options.host="github"] - repository host
* @param {String} [options.branch="master"] - repository branch
* @param {String} [options.token] - API token
* @param {String} [options.style="flat"] - badge style
* @param {String} [options.format="svg"] - badge format
* @returns {Object}
*/
function urls( options ) {
	var opts;
	var out;
	var err;

	opts = {};
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	opts.host = opts.host || 'github';
	opts.branch = opts.branch || 'master';
	opts.style = opts.style || 'flat';
	opts.format = opts.format || 'svg';

	out = {};
	if ( opts.token ) {
		out.image = mustache.render( PRIVATE_IMAGE, opts );
	} else {
		out.image = mustache.render( IMAGE, opts );
	}
	out.url = mustache.render( URL, opts );

	return out;
} // end FUNCTION urls()


// EXPORTS //

module.exports = urls;
