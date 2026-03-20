var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/register", {
            templateUrl: "register.html",
            controller: "regCtrl"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })
        .otherwise({
            redirectTo: "/register"
        });

});

app.factory("userService", function () {

    var user = {};

    return {
        setUser: function (u) {
            user = u;
        },
        getUser: function () {
            return user;
        }
    };

});

app.controller("regCtrl", function ($scope, userService) {

    $scope.register = function () {

        if (!$scope.reg ||
            !$scope.reg.fname ||
            !$scope.reg.lname ||
            !$scope.reg.username ||
            !$scope.reg.password) {
            alert("All fields mandatory");
            return;
        }

        userService.setUser(angular.copy($scope.reg));

        alert("Registration Successful");

        $scope.reg = {};

    };

});

app.controller("loginCtrl", function ($scope, userService) {

    $scope.loginUser = function () {

        if (!$scope.login ||
            !$scope.login.username ||
            !$scope.login.password) {
            alert("All fields mandatory");
            return;
        }

        var u = userService.getUser();

        if (
            $scope.login.username == u.username &&
            $scope.login.password == u.password
        ) {
            alert("Login Success");
        }
        else {
            alert("Invalid Login");
        }

        $scope.login = {};

    };

});