document.getElementById("myinput").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #6F6F81 0%, #6F6F81 ' + value + '%, #27272D ' + value + '%, #27272D 100%)'
  };