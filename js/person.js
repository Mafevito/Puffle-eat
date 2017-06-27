function Person (options) {
  this.direction = 'right';
  this.horizontalPosition
  this.verticalPosition
  // this._assignControlsToKeys()
}

// Avanzar
Person.prototype.move = function(direction){
  this.verticalPosition = $('.person').position().top;
  this.horizontalPosition = $('.person').position().left;
  switch(this.direction){
    case 'up':
      $('.person').css({top: this.verticalPosition-=10});
      console.log($('.person').position());

      break;
    case 'down':
      $('.person').css({top: this.verticalPosition+=10});
      console.log($('.person').position());

      break;
    case 'left':
      $('.person').css({left: this.horizontalPosition-=10});
      console.log($('.person').position());

      break;
    case 'right':
      $('.person').css({left: this.horizontalPosition+=10});
      console.log($('.person').position());

      break;
  }
};

// Cambiar dirección
Person.prototype.goLeft = function() {
  if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'left';
  }
};

Person.prototype.goRight = function() {
  if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'right';
  }
};

Person.prototype.goUp = function() {
  if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'up';
  }
};

Person.prototype.goDown = function() {
  if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'down';
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
