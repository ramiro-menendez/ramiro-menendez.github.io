
/*
Esto sube el titulo 70px si se hace scroll hacia abajo
Lo restaura a su posicion original si se hace hacia arriba.
*/
var posicionAntes = window.pageYOffset;

window.onscroll = function() {
  var posicionDespues = window.pageYOffset;
  if (posicionAntes > posicionDespues) {
    document.getElementById("titulo").style.top = "0";
  } 
  else {
    document.getElementById("titulo").style.top = "-70px";
  }
  posicionAntes = posicionDespues;
} 

/*
Esto pregunta si el menu esta abajo, si lo está, entonces entra 
al "if" y lo sube, tambien rota la flechita y pone el contenido 
en opacidad 1.
De lo contrario, lo baja, rota la flecha y pone el contenido
en opacidad 0.
*/

function subirMenu() {
    if (document.getElementsByClassName("menuAgregarItem")[0].style.marginTop=="0px") {
      document.getElementsByClassName("menuAgregarItem")[0].style.marginTop="-400px";
      document.getElementsByClassName("botonMenu")[0].style.transform = "rotate(180deg)";
      for (i=0; i<=4; i++) {
        document.getElementsByClassName("aparecer")[i].style.opacity = "1";
      }
    }
    else {
      document.getElementsByClassName("menuAgregarItem")[0].style.marginTop="0px";
      document.getElementsByClassName("botonMenu")[0].style.transform = 'rotate(0deg)';
      for (i=0; i<=4; i++) {
        document.getElementsByClassName("aparecer")[i].style.opacity = "0";
      }
    }
}

function subirBajarCarrito() {
    if (document.getElementsByClassName("nav")[0].style.marginBottom=="-430px") {
      document.getElementsByClassName("nav")[0].style.marginBottom="0px";
      document.getElementsByClassName("carrit")[0].style.color="black";
      document.getElementsByClassName("home")[0].style.color="#c9c2c2";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
      document.getElementsByClassName("pantallaNegra")[0].style.opacity = "1";
    }
    else {
      document.getElementsByClassName("nav")[0].style.marginBottom="-430px";
      document.getElementsByClassName("carrit")[0].style.color="#c9c2c2";
      document.getElementsByClassName("home")[0].style.color="black";
      document.getElementsByTagName('html')[0].style.overflow = "scroll";
      document.getElementsByClassName("pantallaNegra")[0].style.opacity = "0";
    }
}

function forzarBajarCarrito() {
  document.getElementsByClassName("nav")[0].style.marginBottom="-430px";
  document.getElementsByClassName("carrit")[0].style.color="#c9c2c2";
  document.getElementsByClassName("home")[0].style.color="black";
  document.getElementsByTagName('html')[0].style.overflow = "scroll";
  document.getElementsByClassName("pantallaNegra")[0].style.opacity = "0";
}


