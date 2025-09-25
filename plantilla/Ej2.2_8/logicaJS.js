function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

let x = prompt("Introduce entre -50 y 50");
let y = prompt("Introduce entre 1 y 20");

let cont = 0;
while(cont<y){
    let result = x * cont;
    alert(result);
    cont++;


}

}