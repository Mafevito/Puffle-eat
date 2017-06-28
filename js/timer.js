function Timer() {
  this.timer = 60;
  this.timeOutId = 0;
  this._checkTimer();
}
Timer.prototype._checkTimer = function () {
  document.querySelector('#tiempo').innerText = this.timer;
    if(this.timer <= 60 && this.timer >= 0){
      this.timer -= 1;
      this.timeOutId = setTimeout(this._checkTimer.bind(this),1000);
      }
      else{
        //document.querySelector('#tiempo').innerText = "Time is over!!";
        //alert('Time is over!');
      }
};
