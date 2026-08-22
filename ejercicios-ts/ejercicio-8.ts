const productos = [
        { nombre: "Kilo de arroz", precio: 50000 },
    { nombre: "Harina", precio: 12000 },
    { nombre: "Jugo Hit", precio: 20000 },
    { nombre: "Papa Criolla", precio: 2500 },
    { nombre: "Play 5", precio: 3000000 }
];

for (const producto of productos) {
    console.log("El producto:", producto.nombre, "tiene un precio de:", producto.precio, "Pesos Colombianos");
}