(function(){
  angular.module('app.controller', [])
    .controller('CipherController', CipherController);
  
  CipherController.$inject = ['$scope', 'CipherFactory'];
  
  function CipherController($scope, CipherFactory){
    $scope.inputMode = true;
    $scope.password = CipherFactory.key.join('');
    $scope.encodeInput = '';
    $scope.output = '';
    $scope.encode = CipherFactory.encode;
    $scope.decode = CipherFactory.decode;
    $scope.check = check;
    $scope.change = change;
    $scope.updatePassword = updatePassword;

    function check() {
      if($scope.password.length === 0){
        $scope.output = 'please enter an encryption code';
        return false;
      }else{
        return true;
      }
    }
    function change(input) {
      if( $scope.check() ){
        if($scope.inputMode){
          $scope.output = $scope.encode.call(CipherFactory, input);  
        }else{
          $scope.output = $scope.decode.call(CipherFactory, input);
        }
      } 
    }
    function updatePassword() {
      if( $scope.check() ){
        CipherFactory.key = $scope.password.toLowerCase().split('');
        $scope.change($scope.encodeInput);
      }
    }
  }  
})();