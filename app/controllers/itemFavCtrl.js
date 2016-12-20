"use strict";

app.controller('ItemFavCtrl', function($scope, ItemFactory){

	ItemFactory.getFavorite()
		.then( (favoriteArray) => {
		
		let favoriteId = [];

		for (var i = 0; i < favoriteArray.length; i++){
			let findId = parseInt(favoriteArray[i].cardid);
			favoriteId.push(findId);
		}

		$scope.sortFavorites(favoriteId);
	}); 


	$scope.sortFavorites = (favoriteId) => {
		console.log("favoriteArrayNumbers", favoriteId); 
		let favoriteArray = [];

		for (var i = 0; i < favoriteId.length; i++){
			let id = favoriteId[i];
			
			ItemFactory.singleFavorite(id)
			.then((favoriteData) => {
				//console.log(favoriteData);
				favoriteArray.push(favoriteData);
				//console.log("fav array", favoriteArray);
			});
		}

		$scope.items = favoriteArray;
		$scope.$apply();

	};


});