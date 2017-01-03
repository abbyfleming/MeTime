"use strict";

/**
  * app.js is the heart of the app. This provides
  * the routes for the application as well as running
  * the app.
*/

var app = angular.module("MeTimeApp", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	console.log('isAuth');
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			if (userExists){
				console.log('resolving');
				resolve();
			} else {
				console.log('rejectng');
				reject();
			}
		});
});


app.config(function($routeProvider, $locationProvider){

	$routeProvider

		.when('/', {
			templateUrl: 'partials/list-items.html',
			controller: 'ItemListCtrl',
			resolve: { isAuth }
		})

		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl"
		})

		.when('/select', {
			templateUrl: 'partials/list-items.html',
			controller: 'ItemListCtrl',
			resolve: { isAuth }
		})

		.when('/favorite', {
			templateUrl: 'partials/list-fav.html',
			controller: 'ItemFavCtrl',
			resolve: { isAuth }
		})

		.when('/create', {
			templateUrl: 'partials/create.html',
			controller: 'itemCreateCtrl',
			resolve: { isAuth }
		})

		.when('/edit/:itemId', {
			templateUrl: 'partials/edit.html',
			controller: 'ItemUpdateCtrl',
			resolve: { isAuth }
		})

		.otherwise({
			redirectTo: "/"
		}); 

	// $locationProvider.html5Mode(true);
	// Resolve: safety feature so people can't just go to the URL. 	
});


app.run( ($location, FBCreds, $rootScope) => {
	let creds = FBCreds;

	$rootScope.$on("$routeChangeError", function () {
		$location.path("/login");
	});

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});