//eliminacion de espacios con trim()
const producto = "     Monitor 20 pulgadas     ";
console.log(producto);
console.log(producto.length);
console.log(producto.trim());

//eliminamos los espacios al principio de la cadena con trimStart()
const producto2 = "     Monitor 20 pulgadas     ";
console.log(producto2);
console.log(producto2.length);
console.log(producto2.trimStart());

//eliminamos los espacios al final de la cadena con trimEnd()
const producto3 = "     Monitor 20 pulgadas     ";
console.log(producto3);
console.log(producto3.length);
console.log(producto3.trimEnd());

//se puede eliminar los espacios al principio y al final de la cadena con trim()
const producto4 = "     Monitor 20 pulgadas     ";
console.log(producto4);
console.log(producto4.length);
console.log(producto4.trimStart().trimEnd());
//se puede eliminar los espacios al principio y al final de la cadena con trim() y obtener la longitud de la cadena resultante
console.log(producto4.trimStart().trimEnd().length);