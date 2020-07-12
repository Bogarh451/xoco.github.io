
    let contenedorContract = document.getElementById("contract");
    let toBig = document.getElementById("toBig");
    let toSmall = document.getElementById("toSmall");
    let moverLetras = document.getElementById("letras")
    
    toBig.addEventListener("click",function(){
      contenedorContract.setAttribute("class","animado");
      moverLetras.setAttribute("class","animadoLetras");


    });

    toSmall.addEventListener("click", function(){
      contenedorContract.setAttribute("class", "estadoInicialContenedor");
      moverLetras.setAttribute("class", "estadoInicialLetras")

    });





