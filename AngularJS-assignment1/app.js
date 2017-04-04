(function() {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController ($scope) {
  $scope.dishes = "";
  $scope.stateOfBeing = "";

  $scope.showMsg = function () {
    var arrayOfDishes = $scope.dishes.split(',');

    if (arrayOfDishes[0] === "") {
      $scope.stateOfBeing = "Please enter data first...";
    } else if (arrayOfDishes.length <= 3){
      $scope.stateOfBeing = "Enjoy!";
    } else {
      $scope.stateOfBeing = "Too much!";
    }
  };
}

})();
