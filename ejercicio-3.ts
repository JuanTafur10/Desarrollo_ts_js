//Ejercicio 3

function suma_total(numeros: number[]): void {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]!;
    }

    console.log("La suma total es:", suma);
}

suma_total([1, 323, 401, 555, 70, 80, 2, 30, 9, 4, 50, 50, 298, 8456]);