'use strict';

// MODULES //

var validate = require( './validate.js' );


// TEMPLATE //

var URL = 'https://codecov.io/{{host}}/{{owner}}/{{repo}}?branch={{branch}}';
var IMAGE = 'https://img.shields.io/codecov/c/{{host}}/{{owner}}/{{repo}}/{{branch}}.{{format}}?style={{style}}';
var PRIVATE_IMAGE = 'https://img.shields.io/codecov/c/token/{{token}}/{{host}}/{{owner}}/{{repo}}/{{branch}}.{{format}}?style={{style}}';


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
	var img;
	var url;
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

	// Badge image...
	if ( opts.token ) {
		img = PRIVATE_IMAGE.replace( '{{token}}', opts.token );
	} else {
		img = IMAGE;
	}
	img = img.replace( '{{host}}', opts.host );
	img = img.replace( '{{owner}}', opts.owner );
	img = img.replace( '{{repo}}', opts.repo );
	img = img.replace( '{{branch}}', opts.branch );
	img = img.replace( '{{format}}', opts.format );
	img = img.replace( '{{style}}', opts.style );

	// Provider url...
	url = URL;
	url = url.replace( '{{host}}', opts.host );
	url = url.replace( '{{owner}}', opts.owner );
	url = url.replace( '{{repo}}', opts.repo );
	url = url.replace( '{{branch}}', opts.branch );

	out = {
		'image': img,
		'url': url
	};
	return out;
} // end FUNCTION urls()


// EXPORTS //

module.exports = urls;
