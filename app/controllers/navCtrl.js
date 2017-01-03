"use strict";

/**
  * navCtrl.js is responsible for the 
  * navigation (menu options) of the website.
*/

app.controller('NavCtrl', function($scope){

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
		}
	];


});