function imprimir_mayores_que_50(numeros: number[]): void {
    let mayores: number[] = [];

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero !== undefined && numero > 50) {
            mayores.push(numero);
        }
    }

    console.log(mayores);
}

imprimir_mayores_que_50([1, 323, 401, 555, 70, 80, 2, 30, 9, 4, 50, 60, 20, 43, 5, 300, 524, 129, 5320]);