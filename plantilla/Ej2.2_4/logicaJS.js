function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let  nota = prompt("Introduce su nota con decimales")

    if (nota>= 0 && nota<=3){
        alert("Muy deficiente")
    }
    if (nota>3 && nota <=5){
        alert("Insuficiente")
    }
    if (nota>5 && nota <=6){
        alert("Bien")
    }
    if (nota>6 && nota <=9){
        alert("Notable")
    }
    if (nota>9 && nota == 10){
        alert("Sobresaliente")
    }
    

}