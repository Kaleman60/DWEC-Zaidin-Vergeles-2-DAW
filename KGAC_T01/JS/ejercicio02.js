// Ejercicio 2. Construimos mensajes con cadenas

const nombreAlum = "Katherine Aleman";
const nomModulo = "Desarrollo Web en Entorno Cliente";
const edad1 = 21;

// Mensaje mediante concatenación con el operador +
const mensajeConcatenado = "Hola, mi nombre es " + nombreAlum + ", tengo " + edad1 + " años y estoy estudiando " + nomModulo + ".";

// Mensaje utilizando template strings con comillas invertidas[cite: 1]
const mensajeTemplate = `Hola, mi nombre es ${nombreAlum}, tengo ${edad1} años y estoy estudiando ${nomModulo}.`;

// Mostrar ambos mensajes en la consola[cite: 1]
console.log("Concatenación con +:");
console.log(mensajeConcatenado);

console.log("Template string:");
console.log(mensajeTemplate);