function Acceso(){
var num0 = document.getElementById("num0").value
var num1 = document.getElementById("num1").value
var num2 = document.getElementById("num2").value
var num3 = document.getElementById("num3").value
var num4 = document.getElementById("num4").value
var num5 = document.getElementById("num5").value
var num6 = document.getElementById("num6").value
var total = (num0*0.6)+(num1*0.1+num2*0.1+num3*0.1+num4*0.1)+(num5*0.2+num6*0.2);
document.getElementById('resultadosuma').innerHTML = "La nota de Selectividad es: "+total+"";
return total
}

