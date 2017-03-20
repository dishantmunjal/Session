var app = angular.module("app", []);

app.controller("appCtrl", function ($scope, fullName, whatsInName) {
    this.pageTitle = "My angular application";
    this.doIt = function (firstName, lastName) {
        return fullName.setName(firstName, lastName);
    }
    this.fullName = function (firstName, lastName) {
        return fullName.getName(firstName, lastName);
    }
    this.myName = function (firstName, lastName) {
        return whatsInName.getName(firstName, lastName);
    }
});

app.controller("appCtrl1", function ($scope, fullName) {
    this.pageTitle = "My angular application";
    this.fullName = function () {
        return fullName.getName();
    }
    
});

app.controller("appCtr", function ($scope, data) {
    var getQuestions = function () {
        $scope.questions = data.getQuestions();
    }
    getQuestions();
});

app.factory('data', function ($q) {
    var getQuestions = function () {
        return [
            {
                value: "Q1",
                difficultLevel: 100
            },
            {
                value: "Q2",
                difficultLevel: 300
            }
        ];
    }

    return {
        getQuestions: getQuestions
    }
});

function showDiv() {
    document.getElementById('nameDiv').style.display = "block";
};

app.service('fullName', function () {
    this.firstName = "";
    this.lastName = "";
    this.getName = function () {
        console.log(this.firstName);
        return this.lastName + ", " + this.firstName;
    }
    this.setName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return "";
    }
});

app.factory('whatsInName', function () {
    getName = function (firstName, lastName) {
        return firstName + " " + lastName;
    }
    dontGetName = function (firstName, lastName) {
        return "fail";
    }

    return {
        getName: getName
        ,dontGetName: dontGetName
    };
})

