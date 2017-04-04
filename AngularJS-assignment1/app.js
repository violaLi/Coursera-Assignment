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
    //calculate number of dishes, do NOT consider and empty item, i.e., , , as an item
    var numberOfDishes = calculate(arrayOfDishes);

    //Get the element to modify color
    var elem1 = document.getElementById("msg");
    var elem2 = document.getElementById("lunch-menu");

    if (numberOfDishes === 0) {
      $scope.stateOfBeing = "Please enter data first...";
      elem1.setAttribute("style", "color: red");
      elem2.setAttribute("style", "border-color: red");
    } else if (numberOfDishes <= 3){
      $scope.stateOfBeing = "Enjoy!";
      elem1.setAttribute("style", "color: green");
      elem2.setAttribute("style", "border-color: green");
    } else {
      $scope.stateOfBeing = "Too much!";
      elem1.setAttribute("style", "color: green");
      elem2.setAttribute("style", "border-color: green");
    }
  };
  
  //Count the number of items, do NOT consider and empty item, i.e., , , as an item
  function calculate(array) {
    var number = 0;
    for(var i in array) {
      if(array[i] === "") continue;
      //console.log(array[i])
      for(var j in array[i]) {
        if(array[i][j] !== " ") {
          number++;
          break;
        }
      }
    }
    return number;
  }


}

})();
