// Template Setup Task
module.exports = function (grunt) {
	grunt.registerTask('build', function() {
		var arr = [
			'clean',
			'imagemin',
			'svgmin',
			'htmlmin',
			'uglify:dev',
			'sass:dev',
		];
		return grunt.task.run(arr);
	});
}
