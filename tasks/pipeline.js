/*
	getting the css ready!
*/

var pre, post;

pre = {
    scripts: {
        dir: 'pre/scripts/',
        pattern: '**/*.js',
    },
    styles: {
        dir: 'pre/styles/',
        pattern: '**/*.scss',
        files: ['pre/styles/importer.scss']
    },
    images: {
        dir: 'pre/images/',
        pattern: '**/*.{png,jpg,jpeg,svg}'
    }
};

post = {
    scripts: {
        dir: 'post/js/'
    },
    styles: {
        dir: 'post/css/',
        files: 'post/css/app.css'
    },
    images: {
        dir: 'post/images/',
    }
}

module.exports.pre = pre;
module.exports.post = post;
