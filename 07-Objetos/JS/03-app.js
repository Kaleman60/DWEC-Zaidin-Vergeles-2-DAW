const alumno = {
    nombre: "Juan",
    edad: 20,
}

console.log(alumno.nombre); // Acceder a la propiedad "nombre"

alumno.edad = 21; // Modificar la propiedad "edad"
alumno.nota = 8;

console.log(alumno); // Acceder a la propiedad "edad"

alumno = {
    nombre: "Pedro",
    edad: 22,
} // Esto generará un error, ya que no se puede reasignar un objeto declarado con const


