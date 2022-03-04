//Pedir número a usuario

var numero1 = prompt ("Ingrese un número mayor a 0");
var numero2 = prompt ("Ingrese un número distinto al anterior y mayor a 0");

//Transformar dato a número 

var numero1 = parseInt(numero1);
var numero2 = parseInt(numero2);

//Realizar operaciones aritméticas, guardando el resultado en una nueva variable

var resultadoSuma = numero1 + numero2;
var resultadoResta = numero1 - numero2;
var resultadoMultiplicacion = numero1 * numero2;
var resultadoDivision = numero1 / numero2;
var resultadoModulo = numero1 % numero2;


//Imprimir resultado en consola

console.log (resultadoSuma);
console.log (resultadoResta);
console.log (resultadoMultiplicacion);
console.log (resultadoDivision);
console.log (resultadoModulo);