
  var  num1=parseInt( prompt("ingrese 1 valor "));
  var num2=parseInt( prompt("ingrese 2 valor "));
  var num3=parseInt( prompt("ingrese 3 valor "));
  var num4=parseInt( prompt("ingrese 4valor "));
  var num5=parseInt( prompt("ingrese 5 valor "));
  var num6=parseInt( prompt("ingrese 6 valor "));
  var num7=parseInt( prompt("ingrese 7 valor "));
  var num8=parseInt( prompt("ingrese 8 valor "));
  var num9=parseInt( prompt("ingrese 9 valor "));
  var num10=parseInt( prompt("ingrese 10 valor "));
  var resultasuma;
  var resultacuadratico;
  var resultapromediio;
  var maximo;
  var  minimo;
  


function suma(resultasuma){
 

return resultasuma=num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;

 }

 alert("resultado de la suma es:_"+suma(resultasuma));


 function cuadrada(resultacuadratico){
     return resultacuadratico=num1**2+num2**2+num3**2+num4**2+num5**2+num6**2+num7**2+num8**2+num9**2+num10**2;
 }
 alert("el resulado de la suma de los cuadrado es: ("+cuadrada(resultacuadratico)+")")


function promedio(resultapromediio){

   return resultapromediio=num1+num2+num3+num4+num5+num6+num7+num8+num9+num10/10
}
alert("el promedio es: ("+promedio(resultapromediio)+")");


function maximominimo(maximo){

    return maximo= Math.max(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
    
     }

    alert("el maximo es :"+maximominimo(maximo))

    
function menor(minimo){
    return minimo= Math.min(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10)
}

alert("el minimo es:"+menor(minimo))