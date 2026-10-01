//vemos como convertir un string a numero

const numero1 = "5";
const numero2 = "20.2";
const numero3 = "uno";

console.log(Number(numero1));

//convertir un string a numero entero
console.log(Number.parseInt(numero1)); //convierte de string a numero entero
console.log(Number.parseFloat(numero2)); //convierte de string a numero decimal

//revisar si un numero es entero o no

console.log(Number.isInteger(numero1)); //false
console.log(Number.isInteger(Number.parseInt(numero1))); //true

//convertimos un string a numero
console.log(numero3.toString()); //convierte de string a numero