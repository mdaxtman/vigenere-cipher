(function(){
  angular.module('app.factory', [])
    .factory('CipherFactory', CipherFactory); 

  function CipherFactory(){
    var key = 'password';
    var alpha = 'qo4u0i9xedy3bazwjgc7m1kp5fshr8ylv62n';
    return new VigenereCipher(key, alpha);
  } 
})();
