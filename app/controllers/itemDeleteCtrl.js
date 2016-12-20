"use strict";

app.controller('ItemDeleteCtrl', function($scope, $window, ItemFactory){

	$scope.deleteFavorite = (cardid) => {

		console.log("itemId", cardid); 
		ItemFactory.deleteFavorite(cardid);

		//how do I refresh the page? eek!
		//$route.reload();
	}

});