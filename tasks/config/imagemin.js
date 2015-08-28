// Image min
module.exports = function(grunt) {

    var pipeline = require('../pipeline');
    grunt.config.set('imagemin', {
        dev: {
            files: [{
                expand: true,
                cwd: pipeline.pre.images.dir,
                src: pipeline.pre.images.pattern,
                dest: pipeline.post.images.dir
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
}
