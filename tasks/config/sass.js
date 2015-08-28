// sass
module.exports = function(grunt) {

    var pipeline = require('../pipeline.js');

    grunt.config.set('sass', {
        dev: {
            files: [
                (function () { // return an object of sass and css
                    var _tmpObject = {};
                    _tmpObject[pipeline.post.styles.files] = pipeline.pre.styles.files
                    return _tmpObject;
                })()
            ],
            options: {
                noCache: true,
                sourcemap: "auto",
                style: 'expanded'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
}
