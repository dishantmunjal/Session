var app = angular.module("app", []);

app.controller("appCtrl", function ($scope,fullName) {
    this.pageTitle = "My angular application";
    this.fullName = function (firstName, lastName) {
        console.log(firstName);

        return fullName.getName(firstName, lastName);
    }
});

function showDiv() {
    document.getElementById('nameDiv').style.display = "block";
};

app.service('fullName', function () {
    this.getName = function (firstName, lastName) {
        return lastName + ", " + firstName;
    }
});