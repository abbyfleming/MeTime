"use strict";

app.controller('ItemListCtrl', function($scope, AuthFactory, ItemFactory){

	$scope.title = "Select Your Favorites";
	$scope.button = "Save";


	//get the items from the item factory
	ItemFactory.getItemList()
		.then( (itemArray) => {
			$scope.items = itemArray;
			$scope.$apply();
	}); 


	//setting default values for scope is not needed since there is not two way binding. you're pulling in values already created. woo. (see below)
	
	$scope.addFavorite = function(itemID){
		//create object with two properties 1) cardId & 2) userId
		//cardID + current user gets passed into the itemFactory to post

		let currentUser = AuthFactory.getUser();
		
		let newFavorite = {
			cardid: itemID,
			uid: currentUser
		};
		
		//send newFavorite to the factory!
		ItemFactory.postFavorite(newFavorite);
	};


});