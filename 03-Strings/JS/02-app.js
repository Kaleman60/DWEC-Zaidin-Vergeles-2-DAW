//utilizamos las propiedades de const: lenght, toUpperCase, toLowerCase, indexOf, includes

const producto = 'Monitor 20 pulgadas';
const precio = '30 euros';

console.log(producto.length);// devuelve el numero de caracteres de la cadena
console.log(producto.toUpperCase());// devuelve la cadena en mayusculas
console.log(producto.toLowerCase());// devuelve la cadena en minusculas
console.log(producto.indexOf('Monitor'));   // devuelve la posicion de la primera ocurrencia de la cadena
console.log(producto.includes('Monitor')); // devuelve true si la cadena contiene la subcadena, false en caso contrario