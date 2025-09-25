function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let numero = prompt("Introduce numero para ver si es primo")

    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
    }

    if (esPrimo) {
        alert("SI");
    } else {
        alert("NO");
    }
}
}
