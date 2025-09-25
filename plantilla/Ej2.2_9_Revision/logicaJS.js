function verEnunciado(){

    let enunciadoAE = "Realiza la lógica de programación para que el usuario introduzca tres valores \
    por teclado <br>si al menos uno de ellos es mayor a 10, <br>mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\".<br> \
    En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let cant = prompt("Introduce la cantidad de notas que quieres poner");

    let valor = "";

    let ncant = 1;

    while(ncant<=cant){

        let nota = prompt("Introduce nota: ");
        valor += nota + " ";
        ncant++;
                
    }
    valor += "-1"
    
    if (valor.includes(10)){
        alert("SI")
    }
    else{
        alert("NO")
    }
}