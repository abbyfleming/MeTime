"use strict";

app.factory("ItemFactory", ($http, FBCreds, AuthFactory) => {

	//console.log("URL", FBCreds.URL);

	//get the json file from firebase
	let getItemList = () => {

		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items.json`)
			.then((itemObject) => {
				let itemCollection = itemObject.data; 
				Object.keys(itemCollection).forEach((key) =>{
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
			
				resolve(items);
			
				})
			.catch((error) => {
				reject(error);
			});
		});
	};


	//post to favorites in firebase
	let postFavorite = (newFavorite) => {
		// console.log("newFavorite", newFavorite); 

		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/favorite.json`, angular.toJson(newFavorite))
			.then((favorite) => {
				resolve(favorite);
				console.log("posted new item", favorite);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	//gets all favorites based on userid
	let getFavorite = () => {
		let currentUser = AuthFactory.getUser();
		let items = [];

		console.log("get favorite", currentUser);

		return new Promise((resolve, reject) => {
			// console.log(currentUser);

			$http.get(`${FBCreds.URL}/favorite.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then((itemObject) => {
				//console.log("itemObject", itemObject.data);
				let itemCollection = itemObject.data;
				Object.keys(itemCollection).forEach((key) =>{
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				// console.log(items);
				resolve(items);
				})
			.catch((error) => {
				reject(error);
			});
		});
	};



	let singleFavorite = (itemId) => {

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items/${itemId}.json`)

			.then((itemObject) => {
				// console.log("singleFavorite", itemObject.data);
				resolve(itemObject.data);

			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	

	//example: ${FBCreds.databaseURL}/favorite/-KZ7E0pNkb-EbMWmFRnX
	//$http.delete(`${FBCreds.databaseURL}/boards/${boardId}.json`)
	let deleteFavorite = (favoriteId) => {

		console.log(favoriteId);

		// return new Promise((resolve, reject) => {
		// 	console.log(favoriteId)
		// 	//http.delete(`${FBCreds.URL}/favorite/${favoriteId}.json`)
		// 	.then((obj)=>{
		// 		resolve(obj);
		// 	})
		// 	.catch((error) => {
		// 		reject(error);
		// 	});
		// });
	};


	


	return {getItemList, postFavorite, getFavorite, singleFavorite, deleteFavorite};

}); 