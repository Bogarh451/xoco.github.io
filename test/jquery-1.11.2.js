$("#responder").click(function(){
	var aux=0;
	var aux3=false;
	 
	for(i=1;i<14;i++){
	 
	  var aux2=$('input[name="preg-'+i+'"]:checked').val();
		
	  if(aux2==null){
		   aux3=false;
		   break;
	   }else{
		   aux=parseInt(aux) + parseInt(aux2);
		   aux3=true;
	   }
	 
	}
	 if(aux3==true){
	   
	   if(aux>52){
		 alert("Ud. dispone de una alta capacidad para controlar conductas prejuiciosas y discriminatorias que pudiesen afectar o humillar a otros, a causa de atributos involuntarios que el otro posea. Se esfuerza por evitar ofender a terceros. Le alertamos a continuar aprovechando la diversidad de los grupos humanos.");
	   }else if(aux>=39 && aux<=51){
		 alert("Ud. dispone de una capacidad media para controlar conductas que discriminan a otros. Esto significa que en ocasiones Ud. podría actuar en base a prejuicios o estereotipos frente a otros que tienen atributos involuntarios y diferentes a Ud. Le sugerimos reflexionar sobre qué conductas podría mejorar para no ofender a otros innecesariamente, dañando sus relaciones y desperdiciando la riqueza de la diversidad.");
	   }else if(aux<40){
		 alert("Ud. tiene una escasa capacidad para controlar conductas discriminatorias, con lo que daña o afecta de manera innecesaria sus relaciones con otras personas perdiendo la oportunidad de conocer y aprovechar las ideas y culturas de personas diferentes. Requerirá dialogar sobre este resultado con otros de su confianza que puedan ayudarle a cambiar y mejorar.");
	   }else{
		 alert("Error 1001, comuniquese con el administrador del curso");
	   }
	 
	   //alert(aux);
	 }else{
		alert("Todas las preguntas deben ser respondidas");
	 }
   });
   