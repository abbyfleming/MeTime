"use strict";
console.log("itemCreateCtrl connected");

app.controller('itemCreateCtrl', function($scope, AuthFactory, ItemFactory){

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

		// //In the factory, run the function postNewItem with the content from user input
		// ItemStorage.postNewItem($scope.newCard)
		// 	.then((response) => {
								
		// 		//after a new card is added, change the url location
		// 		$window.location.href = "/";
		// 	});
	};



});