// Image min
module.exports = function(grunt) {

    var pipeline = require('../pipeline');
    grunt.config.set('svgmin', {
        dev: {
            files: [{
                expand: true,
                cwd: pipeline.pre.images.dir,
                src: '**/*.svg',
                dest: pipeline.post.images.dir
            }]
        }
    });

    grunt.loadNpmTasks('grunt-svgmin');
}
