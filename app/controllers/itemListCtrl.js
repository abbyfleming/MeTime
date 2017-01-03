"use strict";

/**
  * itemListCtrl.js is responsible for displaying
  * the predefined cards
*/

app.controller('ItemListCtrl', function($scope, AuthFactory, ItemFactory){

	$scope.title = "Select Your Favorites";
	$scope.button = "Save";


	//get the items from the item factory
	ItemFactory.getItemList()
		.then( (itemArray) => {
			$scope.items = itemArray;
			$scope.$apply();
	}); 


	/**
	  * NOTE: setting default values for scope is not needed since 
	  * there is not two way binding. you're pulling in values 
	  * already created. woo. (see below). Create an object
	  * with the cardid and userid to pass to the ItemFactory
	*/
	
	$scope.addFavorite = function(itemID){

		let currentUser = AuthFactory.getUser();
		
		let newFavorite = {
			cardid: itemID,
			uid: currentUser
		};
		
		//send newFavorite to the factory!
		ItemFactory.postFavorite(newFavorite);
	};


});