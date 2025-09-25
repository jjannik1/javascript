function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let resultado = 0;
    let sueldo = prompt("Introduce su sueldo: ");
    let antiguo = prompt("Introduce su Antigüedad: ");

    if (sueldo<500 && antiguo >= 10){
        resultado = sueldo * 3;
    }
    if (sueldo < 500 && antiguo < 10) {
        resultado = sueldo * 2;
        
    }
    if (sueldo>=500){
        resultado = sueldo;
    }
     else{   
        alert("Introduce algo bien");
    }

    alert(resultado);

}