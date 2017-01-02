"use strict";

/* This factory only deals with user created cards */

app.factory("ItemCreatedFactory", ($http, $window, FBCreds, AuthFactory) => {

	let postCreated = (createdNote) => {
		console.log("postCreated in Factory");

		return new Promise((resolve, reject) => {
			console.log(createdNote);
			$http.post(`${FBCreds.URL}/created.json`, angular.toJson(createdNote))
			.then((createdNote) => {
				resolve(createdNote);
				$window.alert("You created an item!");
				console.log("posted new item", createdNote);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let getCreated = () => {

		let currentUser = AuthFactory.getUser();
		let items = [];

		console.log(currentUser);

		return new Promise((resolve, reject) => {
			console.log(currentUser);

			$http.get(`${FBCreds.URL}/created.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				
				console.log(itemCollection);
				
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

		console.log("singleCreatedFavorite", itemId);

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/created/${itemId}.json`)

			.then((itemObject) => {
				let itemCollection = itemObject.data;
				console.log("single item from fb", itemCollection);
				resolve(itemCollection);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let postUpdated = (itemId, updatedCardObject) => {

		console.log(itemId, updatedCardObject);

		return new Promise((resolve, reject) => {
			$http.patch(`${FBCreds.URL}/created/${itemId}.json`, angular.toJson(updatedCardObject))

			.then((updatedObject) => {
				resolve(updatedObject);
				console.log("you updated the object");
			})

			.catch((error) => {
				reject(error);
			});
		});
	};


	return {postCreated, getCreated, singleCreatedFavorite, postUpdated};

}); 