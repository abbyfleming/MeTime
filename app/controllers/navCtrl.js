"use strict";

app.controller('NavCtrl', function($scope){

	 $scope.navItems = [
			{
				 name: "Login/Register",
				 url: '/login'
			},
			{
				 name: "Logout",
				 url: '/logout'
			}]; 


	$scope.menuItems = [
		{
			name: "Create",
			url: '/create'
		},

		{
			name: "Favorite",
			url: '/favorite'
		}
	];


});