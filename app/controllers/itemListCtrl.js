"use strict";

console.log("file linked --> itemListCtrl.js");


app.controller('ItemListCtrl', function($scope, ItemFactory){

	$scope.title = "Select Your Favorites";

	//get the items from the item factory
	ItemFactory.getItemList()
		.then( (itemArray) => {
			console.log("Items from factory -->", itemArray);
			$scope.items = itemArray;
			$scope.$apply();
	}); 


	$scope.addFavorite = function(item){
		console.log("you clicked the btn", item);
	};


});