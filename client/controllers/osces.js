var myApp = angular.module('myApp');

myApp.controller('OscesController', ['$scope', '$http', '$location', '$routeParams', '$document', function ($scope, $http, $location, $routeParams, $document) {
    console.log('OscesController loaded...');

    $scope.rotation = ['Aged Care', 'General Practise', 'Mental Health', 'Obstetrics', 'Paediatrics'];

    $scope.getOsces = function () {
        $http.get('/api/osces').success(function (response) {
            $scope.osces = response;
        });
    }

    $scope.getOsce = function () {
        var id = $routeParams.id;
        $http.get('/api/osces/' + id).success(function (response) {
            $scope.osce = response;
        });
    }

    $scope.addOsce = function () {
        console.log($scope.osce);
        $http.post('/api/osces/', $scope.osce).success(function (response) {
            window.location.href = '#/osces';
        });
    }

    $scope.updateOsce = function () {
        var id = $routeParams.id;
        $http.put('/api/osces/' + id, $scope.osce).success(function (response) {
            window.location.href = '#/osces';
        });
    }

    $scope.removeOsce = function (id) {
        $http.delete('/api/osces/' + id).success(function (response) {
            window.location.href = '#/osces';
        });
    }

}]);
