// Ejercicio 7. Orden de las operaciones

// Cálculos
const resultadoSinParentesis = 10 + 5 * 2;
const resultadoConParentesis = (10 + 5) * 2;

// Mostrar resultados
console.log("Resultado sin paréntesis (10 + 5 * 2):", resultadoSinParentesis);
console.log("Resultado con paréntesis ((10 + 5) * 2):", resultadoConParentesis);

// Comentario explicando la diferencia:
// No son iguales porque JavaScript respeta la jerarquía de las operaciones matemáticas: en la primera expresión ejecuta antes la multiplicación (5 * 2 = 10) y luego la suma (10 + 10 = 20). 
// En la segunda expresión, los paréntesis modifican la prioridad y obligan a ejecutar primero la suma (10 + 5 = 15) y posteriormente la multiplicación (15 * 2 = 30)