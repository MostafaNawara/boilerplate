module.exports = function (grunt) {
	var pipeline = require('../pipeline');
	grunt.config.set('clean', {
		css: pipeline.post.styles.dir,
		images: pipeline.post.images.dir,
		scripts: pipeline.post.scripts.dir,
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
}