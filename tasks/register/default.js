// Default task
module.exports = function (grunt) {
	grunt.registerTask('default', function () {
		return grunt.task.run([
			'setup',
			'connect:server',
			'watch',
		]);
	});
}
