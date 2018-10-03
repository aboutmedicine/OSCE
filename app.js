var app = angular.module("myApp", []);

app.controller('myCtrl', ['$scope', function ($scope) {

    $scope.list = [];
    $scope.submit = function (x) {
        $scope.list.splice(0, 1, x)
    };

}]);
