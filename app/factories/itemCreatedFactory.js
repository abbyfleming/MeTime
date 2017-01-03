"use strict";

/* This factory only deals with user created cards */

app.factory("ItemCreatedFactory", ($http, $window, FBCreds, AuthFactory) => {


	let postCreated = (createdNote) => {

		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/created.json`, angular.toJson(createdNote))
			.then((createdNote) => {
				resolve(createdNote);
				$window.alert("You created an item!");
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let getCreated = () => {

		let currentUser = AuthFactory.getUser();
		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/created.json?orderBy="uid"&equalTo="${currentUser}"`)
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



	let singleCreatedFavorite = (itemId) => {
		
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/created/${itemId}.json`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				// console.log("single item from fb", itemCollection);
				resolve(itemCollection);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let postUpdated = (itemId, updatedCardObject) => {

		return new Promise((resolve, reject) => {
			$http.patch(`${FBCreds.URL}/created/${itemId}.json`, angular.toJson(updatedCardObject))
			.then((updatedObject) => {
				resolve(updatedObject);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};



	let deleteCreated = (favoriteId) => {
		console.log(favoriteId);
		return new Promise((resolve, reject) => {
			$http.delete(`${FBCreds.URL}/created/${favoriteId}.json`)
			.then((obj)=>{
				resolve(obj);
				console.log("item deleted");
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {postCreated, getCreated, singleCreatedFavorite, postUpdated, deleteCreated};

}); 