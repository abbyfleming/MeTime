"use strict";
console.log("itemCreateCtrl connected");

app.controller('itemCreateCtrl', function($scope, $location, $window, AuthFactory, ItemCreatedFactory){

	let currentUser = AuthFactory.getUser();
	$scope.btnText = "Create";

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
				//$window.location.href = "/favorite";
				// $location.url("/items/list");
				// $location.path("/favorite");
			});
	};



});