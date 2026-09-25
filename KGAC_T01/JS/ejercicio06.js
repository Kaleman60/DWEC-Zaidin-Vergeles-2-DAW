// Ejercicio 6. ¿Texto o número?

// Variables con distinto tipo
const valorNumero = 20;
const valorTexto = "20";

// Mostrar valor y su tipo
console.log("Valor:", valorNumero, "| Tipo:", typeof valorNumero);
console.log("Valor:", valorTexto, "| Tipo:", typeof valorTexto);

// Operaciones
const sumaNumero = valorNumero + 5;
const sumaTexto = valorTexto + 5;

// Mostrar resultados de las operaciones
console.log("Número + 5:", sumaNumero);
console.log("Texto + 5:", sumaTexto);

// Explicación de la diferencia:
// Con el número realiza una suma matemática (20 + 5 = 25), 
// mientras que con la cadena convierte el 5 a texto y concatena ambos ("20" + "5" = "205")