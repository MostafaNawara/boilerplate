define([], function () {

    var vendorUrl = '../../bower_components/';

    requirejs.config({
        waitSeconds: 60,
        baseUrl: 'post/js/',
        paths: {
            'modules': 'app/modules',

            'async': vendorUrl + 'requirejs-plugins/src/async',

            'jquery': vendorUrl + 'jquery/dist/jquery.min',

            'libs/webfontloader': vendorUrl + 'webfontloader/webfontloader',

            'libs/minivents': vendorUrl + 'minivents/minivents.min',
        },
        map: {
            '*': {
                'libs/jquery': 'jquery'
            },
        },
        shim: {
            'libs/minivents': {
                exports: 'Events'
            },
            'libs/webfontloader': {
                exports: 'WebFont'
            }
        }
    });

});