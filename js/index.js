var board = new Board();
var puffleBlue = new Person({ direction: 'right',id: '1' });
var puffleRed = new Person({ direction: 'left',id: '2' });
var timer = new Timer();
var food1 = new Comida();
var food2 = new Comida();
var food3 = new Comida();
var food4 = new Comida();
var food5 = new Comida();
var food6 = new Comida();
var food7 = new Comida();
var food8 = new Comida();
var food9 = new Comida();
var food10 = new Comida();

var Sound = new Audio ('sounds/sonido.mp3');

$(document).ready(function() {
  //board.generateEnemigo();
  board.generateFood();
  Sound.play();

  $('body').on('keydown', function(e) {
    switch (e.keyCode) {
      case 38: // arrow up
      console.log("3");
        puffleBlue.goUp();
        puffleBlue.move();
        break;
      case 40: // arrow down
      console.log("4");
        puffleBlue.goDown();
        puffleBlue.move();
        break;
      case 37: // arrow left
      console.log("5");
        puffleBlue.goLeft();
        puffleBlue.move();
        break;
      case 39: // arrow right
        puffleBlue.goRight();
        puffleBlue.move();
        break;
      case 87:
        puffleRed.goUp();
        puffleRed.move();
        break;
      case 83:
        puffleRed.goDown();
        puffleRed.move();
        break;
      case 65:
        puffleRed.goLeft();
        puffleRed.move();
        break;
      case 68:
        puffleRed.goRight();
        puffleRed.move();
        break;
    }
  });
});
