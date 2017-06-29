var board = new Board();
var person = new Person();
var timer = new Timer();
var food1 = new Comida();
var food2 = new Comida();
var food3 = new Comida();
var food4 = new Comida();
var food5 = new Comida();
var food6 = new Comida();
//var enemigo1 = new Enemigo();
//var enemigo2 = new Enemigo();
//var enemigo3 = new Enemigo();

$(document).ready(function() {
  board.generateEnemigo();
  board.generateFood();
  person.move();

  $('body').on('keydown', function(e) {
    switch (e.keyCode) {
      case 38: // arrow up
        person.goUp();
        person.move();
        break;
      case 40: // arrow down
        person.goDown();
        person.move();
        break;
      case 37: // arrow left
        person.goLeft();
        person.move();
        break;
      case 39: // arrow right
        person.goRight();
        person.move();
        break;
    }
  });
});
