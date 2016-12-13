"use strict";

//cannot use fat arrows on constructors

app.controller("LoginCtrl", function($scope, AuthFactory, $location) {

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
			});

	};

});