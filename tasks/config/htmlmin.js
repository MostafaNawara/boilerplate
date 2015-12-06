// Image min
module.exports = function(grunt) {

    var pipeline = require('../pipeline');
    grunt.config.set('htmlmin', {
        dev: {
        	options: {
        		removeComments: true,
        		collapseWhitespace: true,
        	},
            files: [{
                expand: true,
                cwd: pipeline.pre.templates.dir,
                src: pipeline.pre.templates.pattern,
                dest: pipeline.post.templates.dir
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
}
