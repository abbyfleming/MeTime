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
		console.log("newFavorite", newFavorite); 

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



	let getFavorite = () => {

		let currentUser = AuthFactory.getUser();
		let items = [];

		console.log(currentUser);

		return new Promise((resolve, reject) => {
			console.log(currentUser);

			$http.get(`${FBCreds.URL}/fav.json?orderBy="uid"&equalTo="${currentUser}"`)
			.success((itemObject) => {
				let itemCollection = itemObject;
				Object.keys(itemCollection).forEach((key) =>{
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.error((error) => {
				reject(error);
			});
		});
	};




	return {getItemList, postFavorite, getFavorite};

}); 