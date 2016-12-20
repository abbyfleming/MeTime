"use strict";

app.controller('ItemFavCtrl', function($scope, ItemFactory){

	ItemFactory.getFavorite()
		.then( (favoriteArray) => {
			//the id does come through with this array

		console.log(favoriteArray);
		
		let favoriteId = [];

		for (var i = 0; i < favoriteArray.length; i++){

			let uniqueCard = {
				id: favoriteArray[i].id,
				cardid: parseInt(favoriteArray[i].cardid)
			}

			//let findId = parseInt(favoriteArray[i].cardid);
			favoriteId.push(uniqueCard);
		}

		console.log("id and cardid", favoriteId);
		$scope.sortFavorites(favoriteId);
	}); 


	$scope.sortFavorites = (uniqueCard) => {
		let favoriteArray = [];

		for (var i = 0; i < uniqueCard.length; i++){
			
			let id = uniqueCard[i].cardid;
			let fbId = uniqueCard[i].id;
			
			ItemFactory.singleFavorite(id)
			.then((favoriteData) => {
				console.log(favoriteData);

				let x = favoriteData;
				x.cardid = fbId;

				favoriteArray.push(favoriteData);
	
				$scope.items = favoriteArray;
				$scope.$apply();
			});
		}
	};


});