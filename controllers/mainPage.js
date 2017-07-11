app.controller('mainPageCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.test = "Hello World!";

    $scope.openRightMenu = function() {
        $mdSidenav('right').toggle();
    };
}]);
