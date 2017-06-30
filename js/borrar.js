function Person (options) {
  this.direction = 'right';
  this.horizontalPosition;
  this.verticalPosition;
  this.puntos = 0;
  // this._assignControlsToKeys()
}

Person.prototype._isLowerUpLimit = function(){
  return this.verticalPosition > 0;
};

Person.prototype._isLeftToTheRightLimit = function(){
  return this.horizontalPosition < 720;
};

Person.prototype._isUpperBottomLimit = function(){
  return this.verticalPosition < 520;
};

Person.prototype._isRightToTheLeftLimit = function(){
  return this.horizontalPosition > 0;
};

// Avanzar
Person.prototype.move = function(direction, cookies){
  this.verticalPosition = $('.person1').position().top;
  this.horizontalPosition = $('.person1').position().left;

  food1.verticalPosition = $('.food1').position().top;
  food1.horizontalPosition = $('.food1').position().left;
  food2.verticalPosition = $('.food2').position().top;
  food2.horizontalPosition = $('.food2').position().left;
  food3.verticalPosition = $('.food3').position().top;
  food3.horizontalPosition = $('.food3').position().left;
  food4.verticalPosition = $('.food4').position().top;
  food4.horizontalPosition = $('.food4').position().left;
  food5.verticalPosition = $('.food5').position().top;
  food5.horizontalPosition= $('.food5').position().left;
  food6.verticalPosition = $('.food6').position().top;
  food6.horizontalPosition = $('.food6').position().left;

  switch(this.direction){
    case 'up':
    if ( this._isLowerUpLimit() ) {
      $('.person1').css({top: this.verticalPosition-=10});
      console.log($('.person1').position());
    }
      break;

    case 'down':
    if ( this._isUpperBottomLimit() ) {
      $('.person1').css({top: this.verticalPosition+=10});
      console.log($('.person1').position());
    }
      break;

    case 'left':
    if ( this._isRightToTheLeftLimit() ) {
      $('.person1').css({left: this.horizontalPosition-=10});
      console.log($('.person1').position());
    }
      break;

    case 'right':
    if ( this._isLeftToTheRightLimit() ) {
      console.log($('.person1').position());
      $('.person1').css({left: this.horizontalPosition+=10});
    }
      break;
  }

  var llamadaColision1 = this.colision(40,food1.horizontalPosition,food1.verticalPosition,20);
  if (llamadaColision1) {
    $('.food1').css({'display':'none'});
    $('#puntos').html(this.puntos +=1);
  }

  var llamadaColision2 = this.colision(40,food2.horizontalPosition,food2.verticalPosition,20);
  if (llamadaColision2) {
    $('.food2').css({'display':'none'});
    $('#puntos').html(this.puntos +=1);
  }

  var llamadaColision3 = this.colision(40,food3.horizontalPosition,food3.verticalPosition,20);
  if (llamadaColision3) {
    $('.food3').css({'display':'none'});
    $('#puntos').html(this.puntos +=1);
  }

  var llamadaColision4 = this.colision(40,food4.horizontalPosition,food4.verticalPosition,20);
  if (llamadaColision4) {
    $('.food4').css({'display':'none'});
    $('#puntos').html(this.puntos +=1);
  }

  var llamadaColision5 = this.colision(40,food5.horizontalPosition,food5.verticalPosition,20);
  if (llamadaColision5) {
    $('.food5').css({'display':'none'});
    $('#puntos').html(this.puntos +=1);
  }

  var llamadaColision6 = this.colision(40,food6.horizontalPosition,food6.verticalPosition,20);
  if (llamadaColision6) {
    $('.food6').css({'display':'none'});
    $('#puntos').html(this.puntos +=1);
  }
};

// Colision
Person.prototype.colision = function(r1, x2, y2, r2) {
  distaciaMinima = r1 + r2;
  DistanciaEntreCentros = Math.sqrt(Math.pow((x2 - this.horizontalPosition),2)+ Math.pow((y2 -this.verticalPosition),2));
  if (Math.abs(DistanciaEntreCentros) <= Math.abs(distaciaMinima)){
    return true;
  }
  else {
    return false;
  }
};

// Cambiar dirección
Person.prototype.goLeft = function() {
    this.direction = 'left';
};

Person.prototype.goRight = function() {
    this.direction = 'right';
};

Person.prototype.goUp = function() {
    this.direction = 'up';
};

Person.prototype.goDown = function() {
    this.direction = 'down';
};
