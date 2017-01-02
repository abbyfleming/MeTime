"use strict";

app.controller('ItemUpdateCtrl', function($scope, $routeParams, ItemCreatedFactory){

	$scope.button = "Update";

	ItemCreatedFactory.singleCreatedFavorite($routeParams.itemId)
		.then((singleCard) => {
			console.log(singleCard);
			
			$scope.selectedItem = singleCard;

			console.log($scope.selectedItem.title);

			$scope.title = $scope.selectedItem.title;
			$scope.description = $scope.selectedItem.description;

			$scope.$apply();

		});

});