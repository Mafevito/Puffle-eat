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
  var verticalComida = $('.food1').position().top;
  var horizontalComida = $('.food1').position().left;
  console.log(verticalComida, horizontalComida);
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

  var llamadaColision = this.colision(200,150,20,this.horizontalPosition,this.verticalPosition,20);
  if (llamadaColision) {
    $('.food1').remove();
  }
};

Person.prototype.colision = function(x1, y1, r1, x2, y2, r2) {
  distaciaMinima = r1 + r2;
  DistanciaEntreCentros = Math.sqrt(Math.pow((x2 - x1),2)+ Math.pow((y2 -y1),2));
  if (Math.abs(DistanciaEntreCentros) <= Math.abs(distaciaMinima)){
    return true;
  }
  else {
    return false;
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

Person.prototype.comer = function() {
  if (this.verticalPosition > verticalComida) {
  }
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
