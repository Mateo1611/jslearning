let pantalla=document.getElementById("display");
pantalla.value="0";
let numeroActual="";
let numeroPrevio="";
let resultado=""
let operacion=""

function agregarNumero(numero) {
    if (resultado !== '') {
        numeroPrevio = resultado; // Si ya hay un resultado, lo usamos como el número anterior
        numeroActual = ''; // Reseteamos el número actual
        resultado = ''; // Limpiamos el resultado
    }
    else{
        numeroActual += numero;
        pantalla.value = numeroActual; // Actualizamos el display con el número ingresado
    }
   
}
function limpiador(){
    numeroActual="";
    numeroPrevio="";
    resultado="";
    operacion=""
    pantalla.value="0"
}
function borrador(){
    if(numeroActual.length===1){pantalla.value="0"}
    else{
    numeroActual=numeroActual.substring(0,numeroActual.length-1);
    pantalla.value=numeroActual;

}
}

function Operar(){
    if(numeroActual===""||operacion===""){
        return
    };
    let resultadoTemp=0;
    let num2=parseFloat(numeroActual);
    let num1=parseFloat(numeroPrevio);
    switch(operacion){
        case"+":
            resultadoTemp=num1+num2;
             break;

        case"x":
            resultadoTemp=num1*num2;
            break;
        case"-":
            resultadoTemp=num1-num2;
             break;
        case '/':
            if (num2 === 0) {
                pantalla.value = 'Error'; // No se puede dividir entre cero
                return;
            }
            resultadoTemp = num1 / num2;
            break;

    }

    resultado=resultadoTemp.toString();
    pantalla.value=resultado;
    numeroActual=resultado;
    operacion="";

    
}
function sumador(){
    Operar()
    operacion="+";
    numeroPrevio=numeroActual;
    numeroActual=""

}
function multiplicador(){
    Operar()
    operacion="x";
    numeroPrevio=numeroActual;
    numeroActual=""

}
let division=()=>{
    Operar()
    operacion="/";
    numeroPrevio=numeroActual;
    numeroActual=""

}

let restador=()=>{
    Operar()
    operacion="-";
    numeroPrevio=numeroActual;
    numeroActual=""

}

function igualador(){
    if(numeroActual!=0 && numeroPrevio!=0){
        Operar();
       
        numeroPrevio="";
    }


}



