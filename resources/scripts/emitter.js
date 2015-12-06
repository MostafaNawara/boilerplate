define(
    ['libs/jquery', 'libs/minivents'],
    function($, Events) {

        $(document).ready(function () {
            sandbox.emit('app.ready');
        });

        $(function () {
            sandbox.emit('app.load');
        });

        $(window).resize(function () {
            sandbox.emit('app.resized');
        });

        sandbox.on('app.fonts.loaded', function () {
            sandbox.emit('app.loaded');
        });

    }
);
