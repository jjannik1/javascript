function verEnunciado(){

    let enunciadoAE =  "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario tres números. Si al menos uno de los valores ingresados es mayor a 10, mostrar en la parte destinada para tal efecto de la aplicación web  'ALGUNO MAYOR QUE 10' . En caso contrario mostrar  'NINGUNO MAYOR QUE 10' . (La doble comilla ha de aparecer también)."
    
    document.getElementById("enunciadoAE").innerHTML = enunciadoAE;

}

function verResolucion(){

    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let num3 = document.getElementById("numero3").value;



    if (num1 < 10 && num2 < 10 && num3 < 10){
        document.write('"Todos son menores que diez"');
    }

    else {
        document.write('"Alguno/s son mayores que diez"');
    }

    


}