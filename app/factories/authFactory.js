"use strict";

/**
  * authFactory.js is responsible for creating the
  * user, login/logout, and checking to see if the 
  * user is authenticated. This factory only
  * deals with the user.
*/

app.factory("AuthFactory", function(){

	let currentUser = null;

	let createUser = function(userObj){
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let loginUser = function(userObj){
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);

	};

	let logoutUser = function(){
		console.log("logoutUser in authFactory");
		return firebase.auth().signOut();
	};


	// A Promise wrapped around a listener. 
	let isAuthenticated = function(){
		// return new Promise((resolve, reject) => {
		// 	if (firebase.auth().currentUser === null) {
		// 		reject();
		// 	} else {
		// 		resolve();
		// 	}
		// });

		return new Promise ((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					currentUser = user.uid;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return currentUser;
	};

	return{createUser, loginUser, logoutUser, isAuthenticated, getUser};

});