define(['../config'], function () {

	require(['init'], function () {
		require(['libs/jquery'], function ($) {

			sandbox.on('app.load', function () {
	            console.log('app.load');
	        });
			sandbox.on('app.loaded', function () {
	            console.log('app.loaded');
	        });
	        sandbox.on('app.resized', function () {
	            console.log('app.resized');
	        });
	        sandbox.on('app.ready', function () {
	            console.log('app.ready');
	        });
	        sandbox.on('app.fonts.loaded', function () {
	            console.log('app.fonts.loaded');
	        });

			require(['emitter']); // emitter should be tailled
		});
	})

});