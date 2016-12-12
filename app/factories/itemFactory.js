"use strict";

app.factory("ItemStorage", ($http, FBCreds) => {

	console.log("URL", FBCreds.URL);

	let getItemList = () => {

		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items.json`)
			.then((itemObject) => {
				let itemCollection = itemObject.data; 
				Object.keys(itemCollection).forEach((key) =>{
					items.push(itemCollection[key]);
					console.log("items array", items);
				});
			
				resolve(items);
			
				})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getItemList};

}); 