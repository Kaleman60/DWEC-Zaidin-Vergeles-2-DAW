// Ejercicio 8. Mini reto: factura de una matrícula

// Datos iniciales
const nombreAlumno = "Ana Gómez";
const nombreCurso = "Curso Especializado en JavaScript";
const precioCurso = 150;
const numeroCursos = 2;

// Cálculos
const importeSinImpuestos = precioCurso * numeroCursos;
const iva = importeSinImpuestos * 0.21;
const importeFinal = importeSinImpuestos + iva;

// Construcción del mensaje con template string
const factura = `====================================
FACTURA DE MATRÍCULA
====================================
Alumno: ${nombreAlumno}
Curso: ${nombreCurso}
Número de cursos: ${numeroCursos}
Precio unitario: ${precioCurso} €
Importe sin impuestos: ${importeSinImpuestos} €
IVA (21%): ${iva} €
Importe final: ${importeFinal} €`;