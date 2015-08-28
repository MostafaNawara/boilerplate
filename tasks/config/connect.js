module.exports = function (grunt) {
	grunt.config.set('connect', {
		server: {
			options: {
				port: 8080,
				base: '.',
				debug: true,
				liveload: true,
				open: true,
				// keepalive: true,
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
}