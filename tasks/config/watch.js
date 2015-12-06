// Watches for changes and runs tasks
module.exports = function (grunt) {

	var pipeline = require('../pipeline');

	grunt.config.set('watch', {
		Gruntfile : {
			files: ['Gruntfile.js', 'tasks/**/*.js'],
			options : {
				livereload : true
			},
			tasks: ['notify:grunt']
		},

		// styles
		sass : {
			files : pipeline.pre.styles.dir + '**/*.scss',
			tasks : ['clean:css', 'sass:dev']
		},
		css : {
			files : pipeline.post.styles.dir + '**/*.css',
			options : {
				livereload : true
			},
			tasks : ['notify:css']
		},

		// Images
		images : {
			files : pipeline.pre.images.dir + pipeline.pre.images.pattern,
			options : {
				livereload : true
			},
			tasks : ['clean:images', 'imagemin:dev', 'svgmin:dev', 'notify:images']
		},

		// scripts
		scripts : {
			files : pipeline.pre.scripts.dir + pipeline.pre.scripts.pattern,
			options : {
				livereload : true
			},
			tasks : ['clean:scripts', 'uglify:dev', 'notify:scripts']
		},

		// htmlmin
		htmlmin: {
			files: pipeline.pre.templates.dir + pipeline.pre.templates.pattern,
			options: {
				livereload: true,
			},
			tasks : ['clean:templates', 'htmlmin:dev', 'notify:templates']
		},

		html: {
			files: ['**/*.html'],
			options: {
				livereload: true
			},
			tasks: ['notify:html']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
}
