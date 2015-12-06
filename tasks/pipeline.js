/*
	getting the css ready!
*/

var pre, post;

pre = {
    scripts: {
        dir: 'resources/scripts/',
        pattern: '**/*.js',
    },
    styles: {
        dir: 'resources/styles/',
        pattern: '**/*.scss',
        files: ['resources/styles/importer.scss']
    },
    images: {
        dir: 'resources/images/',
        pattern: '**/*.{png,jpg,jpeg,svg}'
    },
    templates: {
        dir: 'resources/templates/',
        pattern: '**/*.html'
    }
};

post = {
    scripts: {
        dir: 'assets/js/'
    },
    styles: {
        dir: 'assets/css/',
        files: 'assets/css/app.css'
    },
    images: {
        dir: 'assets/images/',
    },
    templates: {
        dir: 'assets/templates/',
    }
}

module.exports.pre = pre;
module.exports.post = post;
