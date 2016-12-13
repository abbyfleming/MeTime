"use strict";

console.log("file linked --> itemListCtrl.js");


app.controller('ItemListCtrl', function($scope, ItemStorage){

	$scope.title = "Select Your Favorites";

	//get the items from the item factory
	ItemStorage.getItemList()
		.then( (itemArray) => {
			console.log(itemArray);
			$scope.items = itemArray;
			$scope.$apply();
	}); 
});