"use strict";

app.controller('ItemFavCtrl', function($scope, AuthFactory, ItemFactory){

	console.log("ItemFavCtrl");

	ItemFactory.getFavorite()
		.then( (itemArray) => {
			console.log(itemArray); 
			$scope.items = itemArray;
			$scope.$apply();
}); 

});