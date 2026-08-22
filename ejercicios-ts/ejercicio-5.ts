//Ejercicio 5

function promedio_total(numeros: number[]): void {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]!;
    }

    let promedio = suma / numeros.length;

    console.log("El promedio es de los nuemros es:", promedio);
}

promedio_total([1, 323, 401, 555, 70, 80, 2, 30, 9, 4, 50, 50, 298, 8456]);