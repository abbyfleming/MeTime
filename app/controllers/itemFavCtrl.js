"use strict";

app.controller('ItemFavCtrl', function($scope, ItemFactory){

	console.log("ItemFavCtrl");

	ItemFactory.getFavorite()
		.then( (favoriteArray) => {
		
		let favoriteId = [];

		for (var i = 0; i < favoriteArray.length; i++){
			let findId = parseInt(favoriteArray[i].cardid);
			favoriteId.push(findId);
		}

		console.log(favoriteId);
		//$scope.sortFavorites(favoriteArray);
	}); 


	// $scope.sortFavorites = (favoriteArray) => {
	// console.log("favoriteArray", favoriteArray); 
	// };

});