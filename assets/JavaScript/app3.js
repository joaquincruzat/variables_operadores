//Pedir al usuario que ingrese una cantidad de días

var days = prompt("Ingrese una cantidad de días")

//Transformar dato a número 

var days = parseInt(days);

//Realizar operación aritmética para obtener la cantidad de años y semanas

var year = days / 365;
var week = (days % 365) / 7;
var daysFinal = (days%365) % 7;

//Transformar resultados a números enteros
var year = parseInt (year);
var week = parseInt (week);
var daysFinal = parseInt (daysFinal);

//Transformar resultados a números enteros
Math.floor (year);
Math.floor (week);
Math.floor (daysFinal);
//Imprimir resultado en consola

console.log (days+" "+"equivale a" +" "+year+" "+"año(s),"+" "+week+" "+"semana(s)"+" "+"y"+" "+daysFinal+" "+"días");

//INCONCLUSO****