
var calcApp = angular.module("calcApp", []);

calcApp.controller('calcCtrl', ['$scope', function($scope){
    $scope.digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', '0', 'B'];
    $scope.digitStyle = "digit";
    $scope.digitContainerStyle = "digitContainer";
    $scope.codeInit = 'Saisissez code';
    $scope.code = $scope.codeInit;
    $scope.codeModel = '4615B';
    console.log($scope.digit);

    $scope.digitPush = function(digitPushed){
    
      if($scope.code==$scope.codeInit || $scope.code=='erreur' || $scope.code=='Entrez'){
        $scope.code=digitPushed;
      } else {
        $scope.code = $scope.code.padEnd($scope.code.length + 1, digitPushed);
        if ($scope.code.length==5) {
          if ($scope.code == $scope.codeModel) {
            $scope.code = 'Entrez';
          } else {
            $scope.code = 'erreur';
          }
        }


      }

      console.log(digitPushed);
      
    };


}])
