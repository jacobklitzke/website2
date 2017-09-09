app.controller('mainPageCtrl', ['$scope', '$mdSidenav', '$document',function($scope, $mdSidenav, $document) {
    $scope.test = "Hello World!";

    $scope.openRightMenu = function() {
        $mdSidenav('right').toggle();
    };

    $scope.scrollToSection = function(elementName) {
        $mdSidenav('right').close();
        $document.scrollToElementAnimated(angular.element(document.getElementById(elementName)), 0, 2000);
    };

    $scope.$watch(
            function() { return $mdSidenav('right').isOpen(); },
            function(newValue, oldValue) {
                console.log(newValue);
                if(newValue === false) {
                    $scope.opened = false;
                }
                else {
                    $scope.opened = true;
                }
            }
        );

}]);
