var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
    
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";


    $scope.users= [
        {username:"Sbu", email:"sbuja@gmail.com", fullname:"sibusiso"},
        {username:"Sbuja", email:"sbu@gmail.com", fullname:"sibu"},
        {username:"Sbura", email:"sbur@gmail.com", fullname:"sibu"},
         {username:"Sbu", email:"sbuja@gmail.com", fullname:"sibusiso"},
        {username:"Sbuja", email:"sbu@gmail.com", fullname:"sibu"},
        {username:"Sbura", email:"sbur@gmail.com", fullname:"sibu"},
         {username:"Sbu", email:"sbuja@gmail.com", fullname:"sibusiso"},
        {username:"Sbuja", email:"sbu@gmail.com", fullname:"sibu"},
        {username:"Sbura", email:"sbur@gmail.com", fullname:"sibu"},
        {username:"Sbura", email:"sbur@gmail.com", fullname:"sibu"}
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