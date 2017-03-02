var app = angular.module('SwAppi', [
  'ngMaterial',
  'ngRoute'
 ]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
    })
    .when('/vehicles/', {
      templateUrl: 'pages/vehicles.html',
      controller: 'vechicleCtrl'
    });
});

app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.titlePage = 'Welcome to starships gallery!';
}]);

app.controller('vechicleCtrl', ['$scope','$http', function($scope, $http) {
  $scope.vehicles = [];
  $scope.isVisible = true;
  $scope.titlePage = 'Starwars Starships';
  $scope.getVehicles = function() {
    $http({
    method: 'GET',
    url: 'http://swapi.co/api/vehicles/'
    }).then(function successCallback(result) {
        console.log(result);
        $scope.vehicles = result.data.results;
        $scope.isVisible = false;
        console.log($scope.vehicles);

    }, function errorCallback(result) {
      // called asynchronously if an error occurs
      console.log('no starships' + result);
    });
  }
}]);
