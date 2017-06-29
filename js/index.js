var board = new Board();
var person = new Person();
var timer = new Timer();

$(document).ready(function() {
  person.move();
  board.generateEnemigo();
  board.generateFood();

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
