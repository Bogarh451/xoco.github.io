/* Juega con el */
function valorInput(){
  var actualValor = document.getElementById("juegaInput").value;
  
  switch (actualValor){
    case "0":
      document.getElementById("muestraValor").innerHTML = actualValor + " <br>Ausente";
    break;

    case "1":
      document.getElementById("muestraValor").innerHTML = actualValor + " <br>Intensidad Leve";
    break;

    case "2":
      document.getElementById("muestraValor").innerHTML = actualValor + "<br>Intensidad Moderada";
    break;

    case "3":
      document.getElementById("muestraValor").innerHTML =  actualValor + "<br>Intensidad Grave";
    break;

    case "4":
      document.getElementById("muestraValor").innerHTML = actualValor + "<br>Totalmente Incapacitado";
    break;

  }
}








/*No animation*/



let boton = document.getElementById("btnResultado");

boton.addEventListener("click", function(){
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
  
var sumaTodo = 0, sumaCognitiva, sumaSomatica, esTipo, puedoAyudar, ansiedadLeve, ansiedadGrave, ansiedadAusente;

  sumaTodo = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14;
  sumaCognitiva = num1 + num2 + num3 + num4 + num5 + num6 + num14;
  sumaSomatica = num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14;

   
  if(sumaTodo <= 5){

    alert(sumaTodo+" "+sumaCognitiva);
    esTipo = "ANSIEDAD AUSENTE";
    puedoAyudar = "SI CREES QUE EL TEST NO REFLEJA COMO TE SIENTES";
    ansiedadAusente = "Esto no quiere decir que no tengas ansiedad, porque en realidad todos los seres humanos la tenemos y la utilizamos para prever escenarios que puedan resultar dañinos. Simplemente quiere decir que eres perfectamente capaz de controlar y dejar ir preocupaciones que consideras irracionales para centrarte en tu presente. Si te encuentras en un proceso con la ayuda de un profesional, este resultado indica que has recuperado el control por completo. ¡Felicidades! Utiliza lo aprendido en todas las áreas de tu vida y sal a cumplir tus metas. Si no te encuentras en un proceso con la ayuda de un profesional, no es estrictamente necesario que busques ayuda en este apartado. Quizá sería mejor encontrar asesores en otras áreas de tu vida que quisieras mejorar. Sin embargo, te recomiendo revisar mi canal de youtube si el tema te causa curiosidad. La información que encontrarás ahí te ayudará a comprender el tema y a mantener tu ansiedad bajo control, si llegado el caso una situación te expone a preocupaciones o a momentos emocionalmente estresantes.";

    sessionStorage.setItem("ansiedad", esTipo);
    sessionStorage.setItem("ayuda", puedoAyudar);
    sessionStorage.setItem("tipo", ansiedadAusente);

   }

   if(sumaTodo >= 6 && sumaTodo < 15 ){
    alert(sumaTodo+" "+sumaCognitiva); 
    esTipo = "TU ANSIEDAD ES LEVE CON PREVALENCIA SOMATICA";
    puedoAyudar = "DEFINITIVAMENTE PUEDO AYUDARTE CON ESO";
    ansiedadLeve = "Experimentas tensión muscular, dolores en el cuerpo y preocupaciones. Pero te consideras capaz de controlarlas. Es más común que tu ansiedad se presente en cosas como mover demasiado el pie al estar sentado, morder algo para liberar la tensión, algunas noches de mal sueño e incluso ataques de pánico poco frecuentes. Si te encuentras en un proceso con la ayuda de un profesional, este resultado indica que estás recuperando el control. Sigue atendiendo a las recomendaciones de tu profesional, para fortalecer los procesos que te están llevando al control. Recuerda que eliminar la ansiedad no es posible porque todos los seres humanos la tenemos, solo se puede controlar para que opere a nuestro favor. Con paciencia y trabajo duro lo lograrás. ¡Sigue así! Sin embargo, si no te encuentras en un proceso con la ayuda de un profesional, este resultado es un llamado de atención. Aunque consideres controlable tu situación, es importante que recurras a un profesional para que con su asistencia evites que estos procesos de ansiedad sigan desarrollándose hasta convertirse en un problema. Es importante que entiendas que el cerebro ansioso se configura para pensar en la catástrofe y en los peores escenarios. Si bien esto puede ser valioso en algunas profesiones o tareas, lo importante es que sea voluntario y no que sea tu mente la que te dirija a ti a través del estrés constante. Aprender a revalorar y analizar tus preocupaciones para darle paz a tu mente te ayudará bastante a obtener mejor rendimiento en todas las áreas de tu vida. De esta forma, podrás invertir toda la energía que ahora mismo estás gastando en preocupaciones, en cumplir los objetivos y metas de tu vida, así como en vivir y disfrutar de tu presente. ";

    sessionStorage.setItem("ansiedad", esTipo);
    sessionStorage.setItem("ayuda", puedoAyudar);
    sessionStorage.setItem("tipo", ansiedadLeve);

   } 
   if(sumaTodo >= 15){
     
    alert(sumaTodo+" "+sumaCognitiva); 
    esTipo = "TU ANSIEDAD REQUIERE TRATAMIENTO";
    puedoAyudar = "DEFINITIVAMENTE PUEDO AYUDARTE CON ESO";
    ansiedadGrave = "Durante el último mes te ha costado trabajo controlar tu mente, que constantemente divaga en preocupaciones que te hacen sufrir escenarios que es probable que nunca ocurran. Experimentas gran tensión física y dolores en tu cuerpo que quizá sabes o ya te han dicho que son inofensivos, pero que aún te mantienen preocupado y con la sensación de que algo malo ocurrirá. Es probable incluso que la calidad de tu sueño no sea la de antes porque te levantas a mitad de la noche o simplemente no puedes conciliar el sueño. Has notado que los miedos comienzan a aparecer en contextos y situaciones que antes podías realizar con tranquilidad. Temes que tu situación siga creciendo y se te salga de las manos. Además de todo lo ya mencionado, tienes ataques de pánico con mucha frecuencia. Durante esos episodios no sabes que hacer y sientes mucha desesperación porque los médicos te dicen que no tienes nada malo físicamente, pero tú, en esos momentos estás convencido de que morirás. Tal vez desde que despiertas piensas “¿que tan horrible será el ataque de pánico de hoy?” Lo primero que debes hacer es entender la ansiedad saber los mecanismos que la hacen operar te ayudará a comprender que es una situación que puede controlarse con los procesos correctos. Los ataques de pánico son solo señales de alarma disparadas erróneamente por tu amígdala, que quiere ponerte a salvo. Esos “síntomas” que experimentas durante el ataque de pánico son solo capacidades físicas potenciadas proporcionadas por la adrenalina para que huyas o luches de una amenaza externa. La cosa es que no hay una amenaza visible, por eso sentir estas sensaciones físicas nos da pánico. Verás, para controlar la ansiedad además de comprender cómo opera, también debes desenmascarar todos los miedos que te están llevando a no dejar de pensar y a la constante tensión física ocasionada por la preocupación. Piensalo de la siguiente manera: imagina que vas a ponerte tus vacunas y el médico, desde que saca la jeringa, nota que te pones tenso ‘aprietas el cuerpo’, así que cuando te coloca el alcohol te dice “relájate” y tú tienes que hacer un esfuerzo para relajar el músculo. Así como en este ejemplo, que tu cerebro se prepara para el dolor tensando los músculos, así ocurre cuando pensamos que estamos mal de salud o algo malo ocurrirá. A lo largo del día nuestro cuerpo se prepara para ese evento que nunca ocurre, pero que si nos trae dolores musculares por la constante tensión física. Por esto es importante saber desenmascarar los miedos. Haz una lista de tus mayores miedos y después elabora una lista de evidencias a favor de que ocurran y evidencias en contra de que ocurran.";

    sessionStorage.setItem("ansiedad", esTipo);
    sessionStorage.setItem("ayuda", puedoAyudar);
    sessionStorage.setItem("tipo", ansiedadGrave);
   }
  
});
