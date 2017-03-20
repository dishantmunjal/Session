var app = angular.module("app", []);

app.controller("appCtrl", function ($scope) {
    this.pageTitle = "My angular application";
    this.fullName = function (firstName, lastName) {
        return lastName + ", " + firstName;
    }
});
app.controller("appCtrl1", function ($scope) {
    this.pageTitle = "My angular applica";
    this.fullName = function (firstName, lastName) {
        return lastName + ", " + firstName;
    }
});
function showDiv() {
    document.getElementById('nameDiv').style.display = "block";
}


