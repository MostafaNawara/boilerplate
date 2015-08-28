define([], function () {

    var vendorUrl = '../../bower_components/';

    requirejs.config({
        waitSeconds: 60,
        baseUrl: 'post/js/',
        paths: {
            'modules': 'app/modules',

            'async': vendorUrl + 'requirejs-plugins/src/async',

            'libs/jquery': vendorUrl + 'jquery/dist/jquery.min',
            'libs/owl': vendorUrl + 'owl-carousel2/dist/owl.carousel.min',
            'libs/jquery-easing': vendorUrl + 'jquery-easing-original/jquery.easing.min',
            'libs/underscore': vendorUrl + 'underscore/underscore-min',
            'libs/webfontloader': vendorUrl + 'webfontloader/webfontloader',
            'libs/minivents': vendorUrl + 'minivents/minivents.min',
        },
        shim: {
            'libs/minivents': {
                exports: 'Events'
            },
            'libs/jquery': {
                exports: '$'
            },
            'libs/underscore': {
                exports: '_'
            },
            'libs/webfontloader': {
                exports: 'WebFont'
            },
            'libs/jquery-easing': {
                deps: ['libs/jquery'],
                exports: '$'
            },
            'libs/owl': {
                deps: ['libs/jquery'],
                exports: 'jQuery.fn.owlCarousel'
            }
        }
    });

});