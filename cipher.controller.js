(function(){
  angular.module('app.controller', [])
    .controller('CipherController', CipherController);
  
  CipherController.$inject = ['CipherFactory'];
  
  function CipherController(CipherFactory){
    var model = this;
    model.inputMode = true;
    model.password = CipherFactory.key.join('');
    model.encodeInput = '';
    model.output = '';
    model.encode = CipherFactory.encode;
    model.decode = CipherFactory.decode;
    model.check = check;
    model.change = change;
    model.updatePassword = updatePassword;

    function check() {
      if(model.password.length === 0){
        model.output = 'please enter an encryption code';
        return false;
      }else{
        return true;
      }
    }

    function change(input) {
      if( model.check() ){
        if(model.inputMode){
          model.output = model.encode.call(CipherFactory, input);  
        }else{
          model.output = model.decode.call(CipherFactory, input);
        }
      } 
    }

    function updatePassword() {
      if( model.check() ){
        CipherFactory.key = model.password.toLowerCase().split('');
        model.change(model.encodeInput);
      }
    }
  }  
})();
