//Ejercicio 1

function nombres_estudiantes(estudiantes: string[]): void {
    for (let nombres of estudiantes) {
        console.log(nombres);
    }
}

nombres_estudiantes(["Juan", "Pedro", "Maria", "Luis", "Carolina", "Andrea"]);

//Ejercicio 2

function contar_nombres(nombres: string[]): void {
    let cantidad = nombres.length;

    console.log("En la lista hay una cantidad de", cantidad, "estudiantes");
}

contar_nombres(["Juan", "Pedro", "Maria", "Luis", "Carolina", "Andrea"]);