// JsHint your javascript
module.exports = function (grunt) {

	// var pipeline = require('../pipeline');

	grunt.config.set('jshint', {
		all : [
			'Gruntfile.js',
		],
		options : {
			browser: true,
			curly: false,
			eqeqeq: false,
			eqnull: true,
			expr: true,
			immed: true,
			newcap: true,
			noarg: true,
			smarttabs: true,
			sub: true,
			undef: false
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
}
