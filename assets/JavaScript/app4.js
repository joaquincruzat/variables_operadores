//Pedir número a usuario

var numero1 = prompt ("Ingrese un número");
var numero2 = prompt ("Ingrese un segundo número");
var numero3 = prompt ("Ingrese un tercer número");
var numero4 = prompt ("Ingrese un cuarto número");
var numero5 = prompt ("Ingrese un quinto número");

//Transformar dato a número 

var numero1 = parseInt(numero1);
var numero2 = parseInt(numero2);
var numero3 = parseInt(numero3);
var numero4 = parseInt(numero4);
var numero5 = parseInt(numero5);

//Realizar operaciones aritméticas, guardando el resultado en una nueva variable

var resultadoSuma = numero1 + numero2 + numero3 + numero4 + numero5;
var resultadoPromedio = resultadoSuma / 5;


//Imprimir resultado en consola

console.log ("La suma de todos los números es" +" "+ resultadoSuma+", y el promedio es"+" "+resultadoPromedio);
