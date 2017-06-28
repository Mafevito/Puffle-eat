function Board() {
  //this.person = new Person();
}

// Agregar enemigos aleatorio
Board.prototype.generateEnemigo = function() {
  //var that = this;
  var enemigos = setInterval(function(){
  //that.direction;
  var verticalEnemigo1 = Math.floor(Math.random() * 250);
  var horizontalEnemigo1 = Math.floor(Math.random() * 250);
  //console.log(verticalEnemigo1, horizontalEnemigo1);
  $('.enemigo1').css('top',verticalEnemigo1);
  $('.enemigo1').css('left',horizontalEnemigo1);

  var verticalEnemigo2 = Math.floor(Math.random() * 250);
  var horizontalEnemigo2 = Math.floor(Math.random() * 250);
  $('.enemigo2').css('top', verticalEnemigo2);
  $('.enemigo2').css('left', horizontalEnemigo2);

  var verticalEnemigo3 = Math.floor(Math.random() * 250);
  var horizontalEnemigo3 = Math.floor(Math.random() * 250);
  $('.enemigo3').css('top', verticalEnemigo3);
  $('.enemigo3').css('left', horizontalEnemigo3);
 }, 8000);
};

// Generar comida
Board.prototype.generateFood = function() {
  var verticalComida = Math.floor(Math.random() * 100);
  var horizontalComida = Math.floor(Math.random() * 100);
  console.log(verticalComida,horizontalComida);
  $('.food1').css('top', verticalComida);
  $('.food1').css('left', horizontalComida);
  //console.log(verticalComida, horizontalComida);
};
