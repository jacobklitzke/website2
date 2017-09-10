app.controller('mainPageCtrl', ['$scope', '$mdSidenav', '$document', '$window', function($scope, $mdSidenav, $document, $window) {
    $scope.test = "Hello World!";

    $scope.openRightMenu = function() {
        $mdSidenav('right').toggle();
    };

    $scope.scrollToSection = function(elementName) {
        $mdSidenav('right').close();
        $document.scrollToElementAnimated(angular.element(document.getElementById(elementName)), 0, 2000);
    };

    $scope.go = function(url) {
        $window.open(url, '_blank');
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
