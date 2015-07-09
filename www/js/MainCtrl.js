angular
  .module('starter')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.numArr = [];
    $scope.severalNums = [];
    $scope.display = 0;

    //Capturing numbers and storing in an array
    $scope.updateDisplay = function(num) {
      $scope.numArr.push(num)
      $scope.display = $scope.numArr.join('') //joining longer numbers
    }

    //add function. Push to empty array and assign operation value. For addition, multiplication, division, and subtraction
    $scope.setOperator = function(op) {
      $scope.severalNums.push($scope.display * 1); //joins into array [9, 3]
      console.log($scope.severalNums)
      $scope.numArr.length = 0; // resetting array
      $scope.operation = op; //assigning the operator for the equal function below. Pulls from the argument in the html.
    }

    //square
    $scope.squared = function(display) {
      $scope.display = display * display;
    }

    //squareRoot
    $scope.squareRoot = function(display){
      $scope.display = Math.sqrt(display);
    }

    //sin
    $scope.sin = function(display){
      $scope.display = Math.sin(display);
     }

    //cos
    $scope.cos = function(display){
      $scope.display = Math.cos(display);
    }

    //tan
    $scope.tan = function(display){
      $scope.display = Math.tan(display);
    }

    //arcsin
    $scope.sin1 = function(display){
      $scope.display = Math.asin(display);
    }

    //arccos
    $scope.cos1 = function(display){
      $scope.display = Math.acos(display);
    }

    //arctan
    $scope.tan1 = function(display){
      $scope.display = Math.atan(display);
    }

    //enter function
    $scope.equal = function(display){
      $scope.severalNums.push(display * 1);
      $scope.numArr.length = 0;
      //add
      if($scope.operation === '+'){
        $scope.display = $scope.severalNums[0] + $scope.severalNums[1];
        $scope.operation = '';
        $scope.severalNums.length = 0;
      }
      //subtract
      else if($scope.operation === '-'){
        $scope.display = $scope.severalNums[0] - $scope.severalNums[1];
        $scope.operation = '';
        $scope.severalNums.length = 0;
      }
      //Multiply
      else if($scope.operation === '*'){
        $scope.display = $scope.severalNums[0] * $scope.severalNums[1];
        $scope.operation = '';
        $scope.severalNums.length = 0;
      }
      //Divide
      else if($scope.operation === '/'){
        $scope.display = $scope.severalNums[0] / $scope.severalNums[1];
        $scope.operation = '';
        $scope.severalNums.length = 0;
      }
    } //end of equal function

    //clear
    $scope.clear = function(){
      $scope.display = 0;
      $scope.numArr.length = 0;
      $scope.severalNums.length = 0;
      $scope.operation = '';
    }

  }]) //end of controller
