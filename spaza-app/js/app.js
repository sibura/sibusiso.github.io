var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
    
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";


    $scope.users= [
        {product_name:"Milk ", category_name:"Dairy Products", fullname:"sibusiso"},
        {product_name:"Bread", category_name:"Bakery Product", fullname:"sibu"},
        {product_name:"Chakalaka Can", category_name:"Can Food", fullname:"sibu"},
         {product_name:"Iwisa Pap 5kg", category_name:"Bulk", fullname:"sibusiso"},
        {product_name:"Fanta 500ml", category_name:"cold Beverages", fullname:"sibu"},
        {product_name:"Shampoo", category_name:"cosmetics", fullname:"sibu"},
        {product_name:"Bananas", category_name:"fruits", fullname:"sibusiso"},
        {product_name:"Mixed Sweets 5s", category_name:"Confectionaries", fullname:"sibu"},
        {product_name:"Soap Bar", category_name:"Soup", fullname:"sibu"},
        // {product_name:"Sbura", category_name:"sbur@gmail.com", fullname:"sibu"}
    ];

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
         $scope.message = "New User Added Successfully!";
    };
    
    $scope.selectUser = function(user){
          $scope.clickedUser = user;
    };

    $scope.updateUser = function(){
         $scope.message = "User Updated Successfully!";
    };
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
         $scope.message = "User deleted Successfully!";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    }

});