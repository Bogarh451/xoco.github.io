
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



/*No animation*/



let boton = document.getElementById("boton");

boton.addEventListener("click",function(){
  var preg1 = document.getElementById("test1").value;
  var num1= Number(preg1);
  var preg2 = document.getElementById("test2").value;
  var num2= Number(preg2);
  var preg3 = document.getElementById("test3").value;
  var num3= Number(preg3);

  var preg4 = document.getElementById("test4").value;
  var num4= Number(preg4);
  var preg5 = document.getElementById("test5").value;
  var num5= Number(preg5);
  var preg6 = document.getElementById("test6").value;
  var num6= Number(preg6);

  var preg7 = document.getElementById("test7").value;
  var num7= Number(preg7);
  var preg8 = document.getElementById("test8").value;
  var num8= Number(preg8);
  var preg9 = document.getElementById("test9").value;
  var num9= Number(preg9);


  var preg10 = document.getElementById("test10").value;
  var num10= Number(preg10);
  var preg11 = document.getElementById("test11").value;
  var num11= Number(preg11);
  var preg12 = document.getElementById("test12").value;
  var num12= Number(preg12);

  var preg13 = document.getElementById("test13").value;
  var num13= Number(preg13);
  var preg14 = document.getElementById("test14").value;
  var num14= Number(preg14);
  
var sumaTodo, sumaCognitiva, sumaSomatica;

  sumaTodo = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14;
  sumaCognitiva = num1 + num2 + num3 + num4 + num5 + num6 + num14;
  sumaSomatica = num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14;
   
  if(sumaTodo <= 5){
    alert(sumaTodo + " NO TIENES ANSIEDAD" + "<br>" + "Ansiedad cognitiva:" + sumaCognitiva + "<br>" + "Ansiedad somatica:" + sumaSomatica ); 
   } if(sumaTodo >= 6 && sumaTodo < 15 ){
    alert(sumaTodo + " ANSIEDAD LEVE" + "<br>" + "Ansiedad cognitiva:" + sumaCognitiva + "<br>" + "Ansiedad somatica:" + sumaSomatica ); 
   } if(sumaTodo>=15){
    alert(sumaTodo + " ANSIEDAD QUE AMERITA TRATAMIENTO" + "<br>" + "Ansiedad cognitiva:" + sumaCognitiva + "<br>" + "Ansiedad somatica:" + sumaSomatica ); 
   }
  


});

