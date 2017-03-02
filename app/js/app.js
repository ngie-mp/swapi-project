var app = angular.module('SwAppi', ['ngMaterial']);

app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.saludo = 'Hola!';
}]);

app.controller('moviesCtrl', ['$scope','$http', function($scope, $http) {
  $scope.movies = [];
  $scope.getMovies = function() {
    $http({
    method: 'GET',
    url: 'http://swapi.co/api/vehicles/'
    }).then(function successCallback(result) {
        console.log(result);
        $scope.movies = result.data.results;
        console.log($scope.movies);
    }, function errorCallback(result) {
      // called asynchronously if an error occurs
      console.log('no movies' + result);
    });
  }
}]);
