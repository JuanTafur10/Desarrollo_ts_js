const estudiantes = [
    {
        nombre: "Pedro Martínez",
        semestre: 2,
        materias: [
            { nombre: "Programación", nota: 3.8 },
            { nombre: "Matemáticas", nota: 4.2 }
        ]
    },

    {
        nombre: "Laura Gómez",
        semestre: 4,
        materias: [
            { nombre: "Bases de Datos", nota: 4.5 },
            { nombre: "Redes", nota: 3.9 }
        ]
    },

    {
        nombre: "Andrés Ramírez",
        semestre: 1,
        materias: [
            { nombre: "Algoritmos", nota: 3.2 },
            { nombre: "Lógica", nota: 4.0 }
        ]
    },

    {
        nombre: "Camila Torres",
        semestre: 6,
        materias: [
            { nombre: "Ingeniería de Software", nota: 4.7 },
            { nombre: "Sistemas Operativos", nota: 4.3 }
        ]
    },

    {
        nombre: "Mateo Rodríguez",
        semestre: 3,
        materias: [
            { nombre: "Cálculo", nota: 2.9 },
            { nombre: "Física", nota: 3.6 }
        ]
    },

    {
        nombre: "Valentina López",
        semestre: 5,
        materias: [
            { nombre: "Arquitectura de Computadores", nota: 4.1 },
            { nombre: "Electrónica", nota: 3.8 }
        ]
    },

    {
        nombre: "Santiago Pérez",
        semestre: 7,
        materias: [
            { nombre: "Inteligencia Artificial", nota: 4.6 },
            { nombre: "Ciberseguridad", nota: 4.9 }
        ]
    },

    {
        nombre: "Daniela Castro",
        semestre: 2,
        materias: [
            { nombre: "Estadística", nota: 3.7 },
            { nombre: "Geometría", nota: 4.4 }
        ]
    },

    {
        nombre: "Felipe Hernández",
        semestre: 8,
        materias: [
            { nombre: "Desarrollo Web", nota: 4.8 },
            { nombre: "Computación en la Nube", nota: 4.2 }
        ]
    },

    {
        nombre: "Mariana Sánchez",
        semestre: 4,
        materias: [
            { nombre: "Análisis de Sistemas", nota: 3.5 },
            { nombre: "Diseño de Software", nota: 4.6 }
        ]
    }
];

let suma_promedios = 0;

for (const estudiante of estudiantes) {

    let suma_notas = 0;

    for (const materia of estudiante.materias) {
        suma_notas = suma_notas + materia.nota;
    }

    let promedio = suma_notas / estudiante.materias.length;

    console.log(
        "El promedio de",
        estudiante.nombre,
        "es:",
        promedio
    );

    suma_promedios = suma_promedios + promedio;
}

let promedio_general = suma_promedios / estudiantes.length;

console.log("El promedio de todos los estudiantes es:", promedio_general);