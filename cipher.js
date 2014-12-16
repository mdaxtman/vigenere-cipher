var VigenereCipher = function(k, a){
  this.alpha = a.toLowerCase().split('');
  this.key = k.toLowerCase().split('');
};

VigenereCipher.prototype.encode = function(string){
  string = string.split(' ').join('');
  var result = '';
  var kp = 0;
  string = string.toLowerCase();
  for(var i = 0; i < string.length; i++, kp++){
    var shiftTo = null;
    if(kp === this.key.length){
      kp = 0;
    }
    var letter = string[i];
    if(this.alpha.indexOf(letter) > -1){
      shiftTo = this.alpha.indexOf(this.key[kp]) + this.alpha.indexOf(letter);
      if(shiftTo >= this.alpha.length){
        shiftTo = shiftTo % this.alpha.length;
      }
    }
      result += (shiftTo === null ? letter : this.alpha[shiftTo]);  
  }
  return result;
};

VigenereCipher.prototype.decode = function(string){
  var result = '';
  var kp = 0;
  string = string.toLowerCase();
  for(var i = 0; i < string.length; i++, kp++){
    var shiftTo = null;
    if(kp === this.key.length){
      kp = 0;
    }
    var letter = string[i];
    if(this.alpha.indexOf(letter) > -1){
      shiftTo = this.alpha.indexOf(letter) - this.alpha.indexOf(this.key[kp]);
      if(shiftTo < 0){
        shiftTo = this.alpha.length + shiftTo;
      }
    }
      result += (shiftTo === null ? letter : this.alpha[shiftTo]);
  }
  return result;
};

