function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}


//Explicacion:
//Horas de trabajo por precio por hora
//Bruto = horas por precio
// Si las horas pasan sobre 35
// Las horas que se pasan de 35 pagan a 1.5 veces la tarifa normal
//Codigo 
//Pongo un contador para calcular por cuantas horas sobrepasa la tarifa
//Empezando por 35 porque sino no tiene sentido
//Y sumando por cada hora mas para saber cuantas horas excede de las horas que son sobre 35
function verResolucion(){

 let horas = prompt("Introduce las horas trabajadas:");
    horas = Number(horas);

    let precio = prompt("Introduce el precio por hora:");
    precio = Number(precio);

    // Calcular horas normales y extra
    let horas_normales = horas;
    let horas_extra = 0;
    if (horas > 35) {
        horas_normales = 35;
        horas_extra = horas - 35;
    }

    // Calcular salario bruto
    let bruto = horas_normales * precio + horas_extra * precio * 1.5;

    // Calcular impuestos
    let impuesto = 0;
    let restante = bruto;

    if (restante > 500) {
        restante = restante - 500;
    } else {
        restante = 0;
    }

    if (restante > 400) {
        impuesto = impuesto + 400 * 0.25;
        restante = restante - 400;
    } else {
        impuesto = impuesto + restante * 0.25;
        restante = 0;
    }

    if (restante > 0) {
        impuesto = impuesto + restante * 0.45;
    }

    // Calcular salario neto
    let neto = bruto - impuesto;

    // Mostrar resultados
    document.getElementById("resultado").innerHTML =
        "<p>Horas trabajadas: " + horas + "</p>" +
        "<p>Precio por hora: " + precio.toFixed(2) + " €</p>" +
        "<p>Salario bruto: " + bruto.toFixed(2) + " €</p>" +
        "<p>Impuestos: " + impuesto.toFixed(2) + " €</p>" +
        "<p><strong>Salario neto: " + neto.toFixed(2) + " €</strong></p>";

    

}