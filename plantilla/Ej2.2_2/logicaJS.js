function verEnunciado(){

    let enunciadoAE = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un día y mes en formato numérico. La aplicación mostrará en la parte destinada para tal efecto 'SI' si es navidad (el 25 del 12) y 'NO' en caso contrario."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let num1 = prompt("Dia")
    let num2 = prompt("Mes")

    if (num1 == 25 && num2 == 12) {
        alert("Navidad")
    }
    else {
        alert("No navidad")
    }


}