//Pedir valor de temperatura en grados celcius a usuario

var gradosCelsius = prompt("Ingrese temperatura en grados celsius")

//Transformar dato a número 

var gradosCelsius = parseInt(gradosCelsius);

//Realizar transformaciones a grados Kelvin y Fahrenheit, guardando el resultado en una nueva variable

var gradosKelvin = gradosCelsius + 273.15;
var gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;

//Imprimir resultado en consola

console.log (gradosCelsius+" "+"C° equivale a"+" "+gradosKelvin+" "+"K");
console.log (gradosCelsius+" "+"C° equivale a"+" "+gradosFahrenheit+" "+"F");
