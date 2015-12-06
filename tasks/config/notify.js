module.exports = function(grunt) {

    grunt.config.set('notify', {
        options: {
            enabled: true,
            max_jshint_notifications: 5,
            success: false,
            duration: 1,
        },

        watch: {
            options: {
                message: "Now, your watch begins"
            }
        },
        grunt: {
            options: {
                message: "Gruntfile has some changes"
            }
        },
        css: {
            options: {
                message: "Style has some changes"
            }
        },
        images: {
            options: {
                message: "Images updated"
            }
        },
        scripts: {
            options: {
                message: "Scripts updated"
            }
        },
        html: {
            options: {
                message: "html has some changes"
            }
        },
        templates: {
        	options: {
        		message: "templates has some updates"
        	}
        }
        // ------------
    });

    grunt.loadNpmTasks('grunt-notify');
};
