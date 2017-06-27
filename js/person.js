function Person (options) {
  this.direction = 'right';
  this.horizontalPosition;
  this.verticalPosition;
  // this._assignControlsToKeys()
}

Person.prototype._isLowerUpLimit = function(){
  return this.verticalPosition > 0;
};

Person.prototype._isLeftToTheRightLimit = function(){
  return this.horizontalPosition < 460/*920*/;
};

Person.prototype._isUpperBottomLimit = function(){
  return this.verticalPosition < 260/*520*/;
};

Person.prototype._isRightToTheLeftLimit = function(){
  return this.horizontalPosition > 0;
};

// Avanzar
Person.prototype.move = function(direction){
  this.verticalPosition = $('.person').position().top;
  this.horizontalPosition = $('.person').position().left;
  switch(this.direction){
    case 'up':
    if ( this._isLowerUpLimit() ) {
      $('.person').css({top: this.verticalPosition-=10});
      console.log($('.person').position());
    }
      break;

    case 'down':
    if ( this._isUpperBottomLimit() ) {
      $('.person').css({top: this.verticalPosition+=10});
      console.log($('.person').position());
    }
      break;

    case 'left':
    if ( this._isRightToTheLeftLimit() ) {
      $('.person').css({left: this.horizontalPosition-=10});
      console.log($('.person').position());
    }
      break;

    case 'right':
    if ( this._isLeftToTheRightLimit() ) {
      console.log($('.person').position());
      $('.person').css({left: this.horizontalPosition+=10});
    }
      break;
  }
};

// Cambiar dirección
Person.prototype.goLeft = function() {
  //if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'left';
  //}
};

Person.prototype.goRight = function() {
  //if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'right';
  //}
};

Person.prototype.goUp = function() {
  //if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'up';
  //}
};

Person.prototype.goDown = function() {
  //if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'down';
  //}
};


// Agregar enemigos aleatorio
Person.prototype.generateEnemigo = function() {
  //var that = this;
  var enemigos = setInterval(function(){
  //that.direction;
  var verticalEnemigo1 = Math.floor(Math.random() * 100);
  var horizontalEnemigo1 = Math.floor(Math.random() * 100);
  console.log(verticalEnemigo1, horizontalEnemigo1);
  $('.enemigo1').css('top',verticalEnemigo1);
  $('.enemigo1').css('left',horizontalEnemigo1);

  var verticalEnemigo2 = Math.floor(Math.random() * 300);
  var horizontalEnemigo2 = Math.floor(Math.random() * 300);
  $('.enemigo2').css('top', verticalEnemigo2);
  $('.enemigo2').css('left', horizontalEnemigo2);

  var verticalEnemigo3 = Math.floor(Math.random() * 500);
  var horizontalEnemigo3 = Math.floor(Math.random() * 500);
  $('.enemigo3').css('top', verticalEnemigo3);
  $('.enemigo3').css('left', horizontalEnemigo3);
}, 4000);
 };




// Mover segun teclas
// Person.prototype._assignControlsToKeys = function(){
//   $('body').on('keydown', function(e) {
//     switch (e.keyCode) {
//       case 38: // arrow up
//         this.goUp();
//         break;
//       case 40: // arrow down
//         this.goDown();
//         break;
//       case 37: // arrow left
//         this.goLeft();
//         break;
//       case 39: // arrow right
//         this.goRight();
//         break;
//     }
//   });
// };

// clearInterval -> parar algo
