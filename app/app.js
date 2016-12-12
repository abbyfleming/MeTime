"use strict";
console.log("app.js");

/* Define the app */
var app = angular.module("MeTimeApp", ["ngRoute"]);


app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/list-items.html',
			controller: 'ItemListCtrl',
			// Resolve: safety feature so people can't just go to the URL. 
			//resolve: {isAuth}
		});


	$locationProvider.html5Mode(true).hashPrefix('!');
	
});


app.run( ($location, FBCreds) => {
	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});