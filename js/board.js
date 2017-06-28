function Board() {
}

// Agregar enemigos aleatorio
Board.prototype.generateEnemigo = function() {
  var enemigos = setInterval(function(){
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
}, 4000);
};

// Generar comida
Board.prototype.generateFood = function() {
  this.verticalComida1 = Math.floor(Math.random() * 300);
  this.horizontalComida1 = Math.floor(Math.random() * 100);
  $('.food1').css('top', this.verticalComida1);
  $('.food1').css('left', this.horizontalComida1);


  this.verticalComida2 = Math.floor(Math.random() * 350);
  this.horizontalComida2 = Math.floor(Math.random() * 350);
  $('.food2').css('top', this.verticalComida2);
  $('.food2').css('left', this.horizontalComida2);


  this.verticalComida3 = Math.floor(Math.random() * 400);
  this.horizontalComida3 = Math.floor(Math.random() * 400);
  $('.food3').css('top', this.verticalComida3);
  $('.food3').css('left', this.horizontalComida3);

  this.verticalComida4 = Math.floor(Math.random() * 450);
  this.horizontalComida4 = Math.floor(Math.random() * 450);
  $('.food4').css('top', this.verticalComida4);
  $('.food4').css('left', this.horizontalComida4);

  this.verticalComida5 = Math.floor(Math.random() * 400);
  this.horizontalComida5 = Math.floor(Math.random() * 400);
  $('.food5').css('top', this.verticalComida5);
  $('.food5').css('left', this.horizontalComida5);

  this.verticalComida6 = Math.floor(Math.random() * 500);
  this.horizontalComida6 = Math.floor(Math.random() * 500);
  $('.food6').css('top', this.verticalComida6);
  $('.food6').css('left', this.horizontalComida6);
};
