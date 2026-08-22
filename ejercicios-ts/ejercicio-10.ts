const productos = [
    { nombre: "Kilo de arroz", precio: 50000, cantidad: 10 },
    { nombre: "Harina", precio: 12000, cantidad: 5 },
    { nombre: "Jugo Hit", precio: 20000, cantidad: 8 },
    { nombre: "Papa Criolla", precio: 2500, cantidad: 20 },
    { nombre: "Play 5", precio: 3000000, cantidad: 2 }
];

let valor_total = 0;

for (const producto of productos) {

    valor_total = valor_total + (producto.precio * producto.cantidad);

}

console.log("El precio total del inventario es de:", valor_total, "Pesos Colombianos");