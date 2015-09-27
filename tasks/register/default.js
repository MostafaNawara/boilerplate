// Default task
module.exports = function (grunt) {
	grunt.registerTask('default', function () {
		return grunt.task.run([
			'build',
			'connect:server',
			'watch',
		]);
	});
}
