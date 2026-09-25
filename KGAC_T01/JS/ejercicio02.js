// Ejercicio 2. Construimos mensajes con cadenas

const nombreAlumno = "Katherine Aleman";
const nombreModulo = "Desarrollo Web en Entorno Cliente";
const edad = 21;

// Mensaje mediante concatenación con el operador +
const mensajeConcatenado = "Hola, mi nombre es " + nombreAlumno + ", tengo " + edad + " años y estoy estudiando " + nombreModulo + ".";

// Mensaje utilizando template strings con comillas invertidas[cite: 1]
const mensajeTemplate = `Hola, mi nombre es ${nombreAlumno}, tengo ${edad} años y estoy estudiando ${nombreModulo}.`;

// Mostrar ambos mensajes en la consola[cite: 1]
console.log("Concatenación con +:");
console.log(mensajeConcatenado);

console.log("Template string:");
console.log(mensajeTemplate);