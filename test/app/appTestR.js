
const ansiedadSS = sessionStorage.getItem("ansiedad");
const ayudaSS = sessionStorage.getItem("ayuda");

document.getElementById("tipoAnsiedad").innerHTML = ansiedadSS;
document.getElementById("validaAyuda").innerHTML = ayudaSS;


