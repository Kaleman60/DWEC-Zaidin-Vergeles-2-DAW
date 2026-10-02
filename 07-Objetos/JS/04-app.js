const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 100,
    disponible: true
}

//VEMOS COMO ASIGNAR VARIABLES HACIA UN OBJETO

const {nombre} = producto;
console.log(nombre); //Monitor 20 Pulgadas

const {precio} = producto;
console.log(precio); //100

const {disponible} = producto;
console.log(disponible); //true

//const {nombre, precio, disponible} = producto;
//console.log(nombre); //Monitor 20 Pulgadas
//console.log(precio); //100
//console.log(disponible); //true
 