var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'duScroll']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/views/mainPage.html",
            controller: "mainPageCtrl"
        });
}]);
