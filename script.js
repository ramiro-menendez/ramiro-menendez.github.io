
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


function subirMenu()
{
    if (document.getElementsByClassName("menuAgregarItem")[0].style.marginTop=="0px") {
      document.getElementsByClassName("menuAgregarItem")[0].style.marginTop="-300px";
      document.getElementsByClassName("botonMenu")[0].style.transform = "rotate(180deg)";
      document.getElementsByClassName("contenido")[0].style.opacity = "1";
      document.getElementsByClassName("agregarCarrito")[0].style.opacity = "1";
    }
    else {
      document.getElementsByClassName("menuAgregarItem")[0].style.marginTop="0px";
      document.getElementsByClassName("botonMenu")[0].style.transform = 'rotate(0deg)';
      document.getElementsByClassName("contenido")[0].style.opacity = "0";
      document.getElementsByClassName("agregarCarrito")[0].style.opacity = "0";
    }
}