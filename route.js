var app = angular.module('MonApp', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider
              .when('/', {templateUrl: 'partials/home.html', controller: 'homeCtrl'})
              .when('/article/:id', {templateUrl: 'partials/article.html', controller: 'articleCtrl'})
              .otherwise({redirectTo: '/'});
        })
