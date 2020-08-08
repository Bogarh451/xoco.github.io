
const ansiedadSS = sessionStorage.getItem("ansiedad");
const ayudaSS = sessionStorage.getItem("ayuda");
const tipoSS = sessionStorage.getItem("tipo");

document.getElementById("tipoAnsiedad").innerHTML = ansiedadSS;
document.getElementById("validaAyuda").innerHTML = ayudaSS;
document.getElementById("ansiedadExp").innerHTML = tipoSS;


