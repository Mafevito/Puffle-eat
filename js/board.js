function Board() {}

// Agregar enemigos aleatorio
Board.prototype.generateEnemigo = function() {
  var enemigos = setInterval(function() {
    var verticalEnemigo1 = Math.floor(Math.random() * 250);
    var horizontalEnemigo1 = Math.floor(Math.random() * 250);
    //console.log(verticalEnemigo1, horizontalEnemigo1);
    $('.enemigo1').css('top', verticalEnemigo1);
    $('.enemigo1').css('left', horizontalEnemigo1);

    var verticalEnemigo2 = Math.floor(Math.random() * 250);
    var horizontalEnemigo2 = Math.floor(Math.random() * 250);
    $('.enemigo2').css('top', verticalEnemigo2);
    $('.enemigo2').css('left', horizontalEnemigo2);

    var verticalEnemigo3 = Math.floor(Math.random() * 250);
    var horizontalEnemigo3 = Math.floor(Math.random() * 250);
    $('.enemigo3').css('top', verticalEnemigo3);
    $('.enemigo3').css('left', horizontalEnemigo3);
  }, 4000);
};

// Generar comida
Board.prototype.generateFood = function() {
  $('.food1').css('top', food1.verticalPosition);
  $('.food1').css('left', food1.horizontalPosition);

  $('.food2').css('top', food2.verticalPosition);
  $('.food2').css('left', food2.horizontalPosition);

  $('.food3').css('top', food3.verticalPosition);
  $('.food3').css('left', food3.horizontalPosition);

  $('.food4').css('top', food4.verticalPosition);
  $('.food4').css('left', food4.horizontalPosition);

  $('.food5').css('top', food5.verticalPosition);
  $('.food5').css('left', food5.horizontalPosition);

  $('.food6').css('top', food6.verticalPosition);
  $('.food6').css('left', food6.horizontalPosition);
};
