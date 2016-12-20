"use strict";

app.controller('ItemDeleteCtrl', function($scope, ItemFactory){

	$scope.deleteFavorite = (itemId) => {

		console.log("itemId", itemId); 

	}

});