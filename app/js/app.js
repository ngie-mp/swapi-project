var app = angular.module('SwAppi', []);

app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.saludo = 'Hola!';
}]);
