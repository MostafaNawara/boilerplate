// JsHint your javascript
module.exports = function(grunt) {

    // var pipeline = require('../pipeline');

    grunt.config.set('jshint', {
        all: [
            'Gruntfile.js',
        ],
        options: {
            camelcase: true,
            indent: 4,
            undef: true,
            quotmark: 'single',
            maxlen: 80,
            trailing: true,
            curly: true
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
}
