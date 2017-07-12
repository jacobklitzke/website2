app.controller('mainPageCtrl', ['$scope', '$mdSidenav', '$document',function($scope, $mdSidenav, $document) {
    $scope.test = "Hello World!";

    $scope.openRightMenu = function() {
        $mdSidenav('right').toggle();
    };

    $scope.scrollToSection = function(elementName) {
        $mdSidenav('right').close();
        $document.scrollToElementAnimated(angular.element(document.getElementById(elementName)), 0, 2000);
    };

}]);
