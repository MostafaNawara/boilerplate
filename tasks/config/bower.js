module.exports = function(grunt) {
    var pipeline = require('../pipeline');

    grunt.config.set('bower', {
        install: {
            options: {
                layout: 'byComponent',
                copy: false,
                install: true,
                verbose: false,
                cleanTargetDir: false,
                cleanBowerDir: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};
