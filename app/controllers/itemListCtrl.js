"use strict";


app.controller('ItemListCtrl', function($scope, ItemStorage){

	//get the items from the item factory
	ItemStorage.getItemList()
		.then( (itemArray) => {
			console.log(itemArray);
			$scope.items = itemArray;
			$scope.$apply();
	}); 
});