module.exports = function(grunt) {
    var pipeline = require('../pipeline');

    grunt.config.set('bower', {
        install: {
            options: {
                layout: 'byComponent',
                copy: false,
                install: true,
                verbose: true,
                cleanTargetDir: false,
                cleanBowerDir: false,
                bowerOptions: {
                    forceLatest: true,
                    interaction: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};
