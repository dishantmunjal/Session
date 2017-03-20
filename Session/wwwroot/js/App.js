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
        data.getQuestions();
            
    }
    getQuestions();
    $scope.accept = function () {
        document.getElementById('tableDiv').style.display = "block";
        document.getElementById('errorDiv').style.display = "none";
        data.resolve().then(function (data) {
            $scope.questions = data;
        });
    };
    $scope.reject = function () {
        document.getElementById('errorDiv').style.display = "block";
        document.getElementById('tableDiv').style.display = "none";
        data.reject().then(null, function (data) {
            $scope.error = data;
        });
    };
});

app.factory('data', function ($q, $http) {
    var getQuestions = function () {
        var deferred = $q.defer();
        
        return deferred.promise;
    }

    var resolve = function () {
        var deferred = $q.defer();
        var url = "http://questhunt.azurewebsites.net/api/questions";
        $http.get(url)
            .then(function (response) {
                deferred.resolve(response.data);
            })
        
        return deferred.promise;
    }


    var reject = function () {
        var deferred = $q.defer();
        deferred.reject("blah");
        return deferred.promise;
    }

    return {
        getQuestions: getQuestions
        , resolve: resolve
        , reject: reject
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

