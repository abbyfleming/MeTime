"use strict";

app.factory("ItemFactory", ($http, $window, FBCreds, AuthFactory) => {


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



	let postFavorite = (newFavorite) => {

		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/favorite.json`, angular.toJson(newFavorite))
			.then((favorite) => {
				resolve(favorite);
				$window.alert("You saved an item!");
				// console.log("posted new item", favorite);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};



	let getFavorite = () => {

		let currentUser = AuthFactory.getUser();
		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/favorite.json?orderBy="uid"&equalTo="${currentUser}"`)
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


	let singleFavorite = (itemId) => {

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items/${itemId}.json`)

			.then((itemObject) => {
				resolve(itemObject.data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	


	let deleteFavorite = (favoriteId) => {

		return new Promise((resolve, reject) => {
			$http.delete(`${FBCreds.URL}/favorite/${favoriteId}.json`)
			.then((obj)=>{
				resolve(obj);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {getItemList, postFavorite, getFavorite, singleFavorite, deleteFavorite};

}); 