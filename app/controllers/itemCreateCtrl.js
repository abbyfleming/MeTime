"use strict";

/**
  * itemCreateCtrl.js is responsible for the creation
  * of new cards. 
*/

app.controller('itemCreateCtrl', function($scope, $location, AuthFactory, ItemCreatedFactory){

	let currentUser = AuthFactory.getUser();
	$scope.btnText = "Create";

	//default values for the new card
	$scope.newCard = {
		image: "images/create-001.jpg",
		title: "",
		description: "",
		uid: currentUser
	};


	$scope.addNewCard = function(){
		console.log("add a new card", $scope.newCard);
		ItemCreatedFactory.postCreated($scope.newCard)
			.then((response) => {
				//after a new card is added, change the url location
				$location.path("/favorite");
				$scope.$apply();
			});
	};



});