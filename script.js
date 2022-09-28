
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

/*
Esto pregunta si el menu esta abajo, si lo está, entonces entra 
al "if" y lo sube, tambien rota la flechita y pone el contenido 
en opacidad 1.
De lo contrario, lo baja, rota la flecha y pone el contenido
en opacidad 0.
*/

function subirMenu()
{
    if (document.getElementsByClassName("menuAgregarItem")[0].style.marginTop=="0px") {
      document.getElementsByClassName("menuAgregarItem")[0].style.marginTop="-300px";
      document.getElementsByClassName("botonMenu")[0].style.transform = "rotate(180deg)";
      for (i=0; i<=3; i++) {
        document.getElementsByClassName("aparecer")[i].style.opacity = "1";
      }
    }
    else {
      document.getElementsByClassName("menuAgregarItem")[0].style.marginTop="0px";
      document.getElementsByClassName("botonMenu")[0].style.transform = 'rotate(0deg)';
      for (i=0; i<=3; i++) {
        document.getElementsByClassName("aparecer")[i].style.opacity = "0";
      }
    }
}
