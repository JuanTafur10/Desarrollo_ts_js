function suma_muchos_numeros_aleatorios(): void {
    let lista_numeros: number[] = Array.from(
        { length: 1500 },
        () => Math.floor(Math.random() * 500) + 1
    );

    let suma: number = 0;

    for (let i = 0; i < lista_numeros.length; i++) {
        suma += lista_numeros[i] ?? 0;
    }
    
    console.log(lista_numeros);
    console.log(lista_numeros.length);
    console.log("La suma total de los numeros aleatorios es:", suma);
}

suma_muchos_numeros_aleatorios();