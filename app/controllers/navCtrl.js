"use strict";

app.controller('NavCtrl', function($scope){

	 $scope.navItems = [
			{
				 name: "Logout",
				 url: '/logout'
			}]; 


	$scope.menuItems = [
		{
			name: "Select",
			url: '/select'
		},
		{
			name: "Create",
			url: '/create'
		},

		{
			name: "View",
			url: '/favorite'
		},
		{
			name: "Logout",
			url: '/login'
		}
	];


});