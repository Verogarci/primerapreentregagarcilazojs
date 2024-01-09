function obtenerNombre() {
    let nombre = prompt("Bienvenido al servicio de calculo de comisiones! Ingrese su nombre");

    while (nombre === null || nombre.trim() === "") {
        nombre = prompt("Por favor, ingrese un nombre válido");
    }

    return nombre;
}

function ingresarVentas() {
    let comisiones = [];
    let venta = parseFloat(prompt("Ingrese una venta"));

    while (!isNaN(venta)) {
        comisiones.push(parseFloat(venta));
        venta = parseFloat(prompt("Ingrese otra venta o presione 'Cancelar'"));
    }

    return comisiones;
}

function calcularSuma(comisiones) {
    let suma = 0;

    for (let i = 0; i < comisiones.length; i++) {
        suma += comisiones[i];
    }

    return suma;
}



function mostrarDetalles(nombre, comisiones, suma) {
    alert("Las comisiones ingresadas fueron: $" + comisiones.join(", $"));
    alert("La suma total de sus comisiones es: $" + suma);

    

    let comision = suma * 0.30;
    alert("La comisión que usted cobrará es de: $" + comision.toFixed(2));

    alert("¡Muchas gracias, " + nombre + ", por usar nuestros servicios!");
}

function iniciarPrograma() {
    let nombre = obtenerNombre();
    alert("¡Bienvenido, " + nombre + "!");

    let comisiones = ingresarVentas();

    if (comisiones.length > 0) {
        let suma = calcularSuma(comisiones);
        mostrarDetalles(nombre, comisiones, suma);
    } else {
        alert("No se ingresaron comisiones. ¡Gracias, " + nombre + ", por usar nuestros servicios!");
    }
}

iniciarPrograma();