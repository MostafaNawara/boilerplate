module.exports = function (grunt) {

	var pipeline = require('../pipeline');
	grunt.config.set('uglify', {
		dev: {
			options: {
				sourceMap: false,
				mangle: false,
				compress: false,
				beautify: true,
			},
			expand: true,
			cwd: pipeline.pre.scripts.dir,
			src: pipeline.pre.scripts.pattern,
			dest: pipeline.post.scripts.dir
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

};