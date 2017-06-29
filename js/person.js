function Person (options) {
  this.direction = 'right';
  this.horizontalPosition;
  this.verticalPosition;
  this.horizontalComida;
  this.verticalComida
  this.puntos = 0;
  // this._assignControlsToKeys()
}

Person.prototype._isLowerUpLimit = function(){
  return this.verticalPosition > 0;
};

Person.prototype._isLeftToTheRightLimit = function(){
  return this.horizontalPosition < 720/*920*/;
};

Person.prototype._isUpperBottomLimit = function(){
  return this.verticalPosition < 520/*520*/;
};

Person.prototype._isRightToTheLeftLimit = function(){
  return this.horizontalPosition > 0;
};

// Avanzar
Person.prototype.move = function(direction){
  this.verticalPosition = $('.person').position().top;
  this.horizontalPosition = $('.person').position().left;


  this.verticalComida1 = $('.food1').position().top;
  this.horizontalComida1 = $('.food1').position().left;
  this.verticalComida2 = $('.food2').position().top;
  this.horizontalComida2 = $('.food2').position().left;
  this.verticalComida3 = $('.food3').position().top;
  this.horizontalComida3 = $('.food3').position().left;
  this.verticalComida4 = $('.food4').position().top;
  this.horizontalComida4 = $('.food4').position().left;
  this.verticalComida5 = $('.food5').position().top;
  this.horizontalComida5 = $('.food5').position().left;
  this.verticalComida5 = $('.food6').position().top;
  this.horizontalComida5 = $('.food6').position().left;


  console.log(this.verticalComida, this.horizontalComida);
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

  var llamadaColision1 = this.colision(this.horizontalPosition,this.verticalPosition,40,this.horizontalComida1,this.verticalComida1,20);
  if (llamadaColision1) {
    $('.food1').remove();
    $('#puntos').html(this.puntos +=1);
    person.move();
  }

  var llamadaColision2 = this.colision(this.horizontalPosition,this.verticalPosition,40,this.horizontalComida2,this.verticalComida2,20);
  if (llamadaColision2) {
    $('.food2').remove();
  }

  var llamadaColision3 = this.colision(this.horizontalPosition,this.verticalPosition,40,this.horizontalComida3,this.verticalComida3,20);
  if (llamadaColision3) {
    $('.food3').remove();
  }

  var llamadaColision4 = this.colision(this.horizontalPosition,this.verticalPosition,40,this.horizontalComida4,this.verticalComida4,20);
  if (llamadaColision4) {
    $('.food4').remove();
  }

  var llamadaColision5 = this.colision(this.horizontalPosition,this.verticalPosition,40,this.horizontalComida5,this.verticalComida5,20);
  if (llamadaColision5) {
    $('.food5').remove();
  }

  var llamadaColision6 = this.colision(this.horizontalPosition,this.verticalPosition,40,this.horizontalComida6,this.verticalComida6,20);
  if (llamadaColision6) {
    $('.food6').remove();
  }
};

// Colision
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
