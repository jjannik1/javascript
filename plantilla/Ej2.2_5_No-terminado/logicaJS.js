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

    let horas =  prompt("Introduce las horas trabajadas: ");

    let precio = prompt("Introduce el precio por hora: ");

    let bruto = horas * precio;

    let tarifa_mas = 0;

    if (horas>35){

        let cont = 35;
        while (cont!=horas){
            tarifa_mas++;
            cont++;
        }

        
    }

    

}