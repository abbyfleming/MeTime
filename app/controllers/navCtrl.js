"use strict";

app.controller('NavCtrl', function($scope){

   $scope.navItems = [
      {
         name: "Login/Register",
         url: '/login'
      },
      {
         name: "Logout",
         url: '/logout'
      }]; 


   $scope.menu = [
      {
      	name: "Select",
      	url: '#'
      },
      {
         name: "Create",
         url: '#'
      },
      {
         name: "View",
         url: '#'
      }]; 


});

