const nombre = "Kath";
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("button");

console.log("Javascript se ha cargado correctamente");

boton.addEventListener("click", function(){
    mensaje.textContent = "Hola," + nombre + "!";
});