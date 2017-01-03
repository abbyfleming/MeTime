"use strict";

app.controller('ItemUpdateCtrl', function($scope, $location, $routeParams, AuthFactory, ItemCreatedFactory){

	let currentUser = AuthFactory.getUser();
	$scope.button = "Update";

	ItemCreatedFactory.singleCreatedFavorite($routeParams.itemId)
		.then((singleCard) => {
		
			//set the scope to singleCard to be able to display in the dom
			$scope.selectedItem = singleCard;

			$scope.updateCard = {
				title: $scope.selectedItem.title,
				description: $scope.selectedItem.description
			};
			
			$scope.$apply();

		});


	$scope.updateCardtoFB = function(){
		console.log("update card", $scope.updateCard);
		// console.log($routeParams.itemId);
		ItemCreatedFactory.postUpdated($routeParams.itemId, $scope.updateCard)
			.then((response) => {
				//after a new card is added, change the url location
				$location.path("/favorite");
			});
	};


});