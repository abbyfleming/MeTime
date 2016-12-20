"use strict";
console.log("app.js");

// Resolve: safety feature so people can't just go to the URL. 
//resolve: {isAuth}


/* Define the app */
var app = angular.module("MeTimeApp", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			if(userExists){
				resolve();
			} else {
				reject();
			}
		});
});

app.config(function($routeProvider, $locationProvider){
	$routeProvider

		.when('/login', {
		templateUrl: 'partials/login.html',
		controller: "LoginCtrl"

		})

		.when('/select', {
			templateUrl: 'partials/list-items.html',
			controller: 'ItemListCtrl',
			resolve: {isAuth}
		})

		.when('/favorite', {
			templateUrl: 'partials/list-fav.html',
			controller: 'ItemFavCtrl'
		})

		.otherwise('/login'); 

	$locationProvider.html5Mode(true);
	
});


app.run( ($location, FBCreds) => {
	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});