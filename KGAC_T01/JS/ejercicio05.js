//Actividad 5 - El precio de una compra

//Datos de entrada
const producto = "Teclado Mecanico";
const precioUnitario = 150; // Precio unitario del producto
const cantidad = 3; // Cantidad de productos comprados

//Calculos
const subtotal = precioUnitario * cantidad; // Calculo del subtotal
const iva = subtotal * 0.21; // Calculo del impuesto (21%)
const total = subtotal + iva; // Calculo del total a pagar

//muestra en consola un mensaje que incluye producto,cantidad, subtotal, iva y total
console.log(`Resumen de la compra:
- Producto: ${producto}
- Cantidad: ${cantidad}
- Subtotal: ${subtotal} €
- IVA (21%): ${iva} €
- Total a pagar: ${total} €`);
