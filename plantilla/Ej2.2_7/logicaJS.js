function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

let num = prompt("Introduce numero");

let uno = 1;

if (num>=1){
    while(true){
        alert(uno);
        uno++;
        uno++;
        if (uno >num){
            break
        }
        
    }
}
else{
    alert("Error: Introduce un numero mayor o igual a 1")
}

}