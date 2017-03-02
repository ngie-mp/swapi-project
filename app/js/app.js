var app = angular.module('SwAppi', [
  'ngMaterial',
  'ngRoute'
 ]);

app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.saludo = 'Hola!';
}]);

app.controller('vechicleCtrl', ['$scope','$http', function($scope, $http) {

  $scope.vehicles = [];

  $scope.getVehicles = function() {
    $http({
    method: 'GET',
    url: 'http://swapi.co/api/vehicles/'
    }).then(function successCallback(result) {
        console.log(result);
        $scope.vehicles = result.data.results;
        console.log($scope.vehicles);
    }, function errorCallback(result) {
      // called asynchronously if an error occurs
      console.log('no starships' + result);
    });
  }
}]);
