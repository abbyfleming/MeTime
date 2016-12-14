"use strict";

app.controller('ItemListCtrl', function($scope, AuthFactory, ItemFactory){

	$scope.title = "Select Your Favorites";
	let currentUser = AuthFactory.getUser();

	//get the items from the item factory
	ItemFactory.getItemList()
		.then( (itemArray) => {
			//console.log("Items from factory -->", itemArray);
			$scope.items = itemArray;
			$scope.$apply();
	}); 


	//setting default values for scope is not needed since there is not two way binding. you're pulling in values already created. woo.
   
   // ** START WORKING HERE ** /

	$scope.addFavorite = function(itemID){
		//console.log("currentUser", currentUser);
		
		//create object with two properties 1) cardId & 2) userId
		//cardID + current user gets passed into the itemFactory to post

		//ItemFactory.postFavorite(newFavorite);
	};


});