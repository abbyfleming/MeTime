"use strict";

app.controller('ItemFavCtrl', function($scope, ItemFactory, ItemCreatedFactory){

	$scope.button = "Delete";

/**
 * getCreated returns the data from the 
 * ItemCreatedFactory (user created)
 */

	ItemCreatedFactory.getCreated()
		.then((createdArray) => {
			console.log(createdArray);
	});


/**
  * getFavorite returns the data from the ItemFactory
  * then for each item, creates a new object with
  * the cardid (ex: 3) & id (from firebase) 
  * then sends along to sort
*/

	ItemFactory.getFavorite()
		.then( (favoriteArray) => {
			$scope.buildFavorite(favoriteArray);
	}); 


	$scope.buildFavorite = (favoriteArray) => {

		let favoriteId = [];

		for (var i = 0; i < favoriteArray.length; i++){
			let uniqueCard = {
				id: favoriteArray[i].id,
				cardid: parseInt(favoriteArray[i].cardid)
			};

			favoriteId.push(uniqueCard);
		}

		$scope.sortFavorite(favoriteId);
	};



/**
  * sortFavorite takes the array from getFavorite
  * and makes a call to singleFavorite in ItemFactory
  * when the data returns, the unique id is then added 
  * back in. This allows a user to delete only their favorite
*/

	$scope.sortFavorite = (uniqueCard) => {
		console.log("is sort fav running too?");
		let favoriteArray = [];

		for (var i = 0; i < uniqueCard.length; i++){
			
			let id = uniqueCard[i].cardid;
			let fbId = uniqueCard[i].id;
			
			ItemFactory.singleFavorite(id)
			.then((favoriteData) => {

				console.log(favoriteData);

				let data = favoriteData;
				data.cardid = fbId;

				favoriteArray.push(favoriteData);
		
				//items gets displayed in the dom
				$scope.items = favoriteArray;
				$scope.$apply();
			});
		}
	};


/**
  * deleteFavorite takes the cardid from the user's selection
  * and makes a call to deleteFavorite in the factory
  * then runs a call to build up a new favorite array
  * and sorts the array to update the scope.
*/


	$scope.deleteFavorite = (cardid) => {
		ItemFactory.deleteFavorite(cardid)
			
			.then ((cardid) => {	
				ItemFactory.getFavorite()
					
			.then((favoriteArray) => {	
				$scope.buildFavorite(favoriteArray);
				});
			
			});
	};

});