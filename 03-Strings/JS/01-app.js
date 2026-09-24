//las cadenas de string representan texto, y se pueden definir con comillas simples o dobles
//existen 3 formas de crear cadenas de string: con comillas simples, dobles o backticks (plantillas literales)
//crean una cadena primitiva
const producto1 = 'Monitor 20 pulgadas';
const producto2 = String('Monitor 20 pulgadas');

//forma menos comun
const producto3 = new String('Monitor 20 pulgadas'); //crea un objeto de tipo string

console.log(producto1);
console.log(producto2);
console.log(producto3);

const producto4 = 'Monitor 20 pulgadas\"';
console.log(producto4);