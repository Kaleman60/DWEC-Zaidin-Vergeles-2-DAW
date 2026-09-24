//vemos concatenación y plantillas literales (template strings)
//vemos como cancatenar o unir cadenas de texto con el operador + y con template strings
const producto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

console.log(producto.concat(" con un precio de ", precio, " euros"));

//otras formas de concatenar cadenas de texto
console.log(producto + " con un precio de " + precio + " euros");
console.log(`El producto ${producto} tiene un precio de ${precio} euros`);


