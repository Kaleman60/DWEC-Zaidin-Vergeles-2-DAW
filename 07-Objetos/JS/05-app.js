//objeto puede tener dentro cualquier tipo de dato, incluso otro objeto
//se conoce como objetos aninados

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 100,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}

console.log(producto);
//accedemos al objeto aninado
console.log(producto.informacion.fabricacion.pais); //China

const {informacion} = producto; //destructuring
console.log(informacion);