//Actividad 3 - Trabajo con cadenas

const frase = "se esta aprendiendo Javascript"

//mostrar la cadena original 
console.log("cadena original:", frase);

//mostrar cuantos caracteres tiene con lenght
console.log("numero de caracteres:", frase.length);

//mostrar mayusculas y completamente en minusculas
console.log("En mayusculas:", frase.toUpperCase());

//mostrar en minusculas 
console.log("En minusculas: ", frase.toLowerCase());

//sustitucion de uan frase por otra
const nuevaFrase = frase.replace("fundamental");
console.log("Cadena tras replace():", nuevaFrase);

