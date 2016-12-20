"use strict";

app.controller('ItemDeleteCtrl', function($scope, ItemFactory){

	$scope.deleteFavorite = (cardid) => {

		console.log("itemId", cardid); 

	}

});