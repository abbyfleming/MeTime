"use strict";

app.factory("ItemFactory", ($http, FBCreds) => {

	console.log("URL", FBCreds.URL);

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
	let postFavorites = (newTask) => {
		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/fav.json`, angular.toJson(newTask))
			.success((obj) => {
				resolve(obj);
				console.log("posted new item");
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	return {getItemList, postFavorites};

}); 