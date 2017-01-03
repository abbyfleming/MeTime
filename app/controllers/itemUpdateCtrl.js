"use strict";

/**
  * itemUpdateCtrl.js is responsible for updating cards
  * and sending the updates to firebase. 
*/

app.controller('ItemUpdateCtrl', function($scope, $location, $routeParams, AuthFactory, ItemCreatedFactory){

	let currentUser = AuthFactory.getUser();
	$scope.button = "Update";

	/**
	  * singleCreatedFavorite calls the factory with the itemId
	  * and sets the scope to the results. A new object is created
	  * with the user's updates.
	*/

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


	/** Take the updates and post them to ItemCreatedFactory
	  * sending along the itemId & and card to be updated.
	  * Once finished, change the view back to favorite 
	  * to see the changes.
	 */

	$scope.updateCardtoFB = function(){

		ItemCreatedFactory.postUpdated($routeParams.itemId, $scope.updateCard)
			.then((response) => {
				//after a new card is added, change the url location
				$location.path("/favorite");
				$scope.$apply();
			});
	};


});