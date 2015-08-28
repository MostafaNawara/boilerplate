// Template Setup Task
module.exports = function (grunt) {
	grunt.registerTask('setup', function() {
		var arr = [
			// 'jshint',
			'bower',
			'clean',
			'imagemin',
			'svgmin',
			'uglify:dev',
			'sass:dev',
		];
		return grunt.task.run(arr);
	});
}