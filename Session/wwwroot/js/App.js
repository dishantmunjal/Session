var app = angular.module("app", []);

app.controller("appCtrl", function ($scope) {
    $scope.pageTitle = "My angular application";
    $scope.fullName = function (firstName, lastName) {
        return lastName + ", " + firstName;
    }
    
});

function showDiv() {
    document.getElementById('nameDiv').style.display = "block";
}


