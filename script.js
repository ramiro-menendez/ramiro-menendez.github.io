
/*
Esto sube el titulo 70px si se hace scroll hacia abajo
Lo restaura a su posicion original si se hace hacia arriba.
*/
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("titulo").style.top = "0";
  } 
  else {
    document.getElementById("titulo").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
} 