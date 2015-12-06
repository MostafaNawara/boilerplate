define(
    ['libs/webfontloader', 'libs/jquery', 'libs/minivents'],
    function(WebFont, $, Events) {

        sandbox = new Events; // initializing events sandbox

        sandbox.on('app.ready', function () {
            WebFont.load( // loading fonts
                {
                    google: {
                        families: ['Lato:100,300:latin'],
                    },
                    active: function () {
                        sandbox.emit('app.fonts.loaded');
                    }
                }
            );
        })

    }
);
