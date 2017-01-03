"use strict";

/**
  * loginCtrl.js is responsible for allowing the
  * user to login or register.
*/

app.controller("LoginCtrl", function($scope, AuthFactory, $location, $timeout) {

	let currentUser = AuthFactory.getUser();

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
			.then((userData) => {
				$scope.login();
			});
	};

	$scope.login = () => {
		AuthFactory.loginUser($scope.account)
			.then((user) => {
				$location.path("/select");
				$timeout();
			});

	};

	$scope.logout = () => {
		console.log("clicked logout");
		AuthFactory.logoutUser()
			.then((response) => {
				currentUser = null;
				$location.path("/login");
				$timeout();
			});
	};

});