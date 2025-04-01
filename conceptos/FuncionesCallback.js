//Callback: Funciones que se pasan como parámetro a otra función 

//repaso de funciones clasicas
function miFuncion1(){
    console.log("funcion 1)");
}

function miFuncion2(){
    console.log("funcion 2)");
}

miFuncion1();// estas se ejecutan en el orden en que sean llamadas
miFuncion2();

//Con callbacks

let imp=function imprimir(mensaje){
    console.log(mensaje);
}

let sumar=(a,b,funcionCallback)=>{
    let resultado=a+b;
    funcionCallback(`Resultado: ${resultado}`);
}

sumar(2,3,imp); //esto ejecuta la funcion imprimir con el resultado de la suma




//llamadas asíncronas con uso de Timeout

function mifuncionCallback(){
    console.log("saludo asíncrono después de 3 segundos")

}

setTimeout(mifuncionCallback,3000);

setTimeout(function Callback2(){console.log("saludo asíncrono después de 2 segundos")},2000);
//Se ejecuta primero esta ultima linea, ya no es secuencial como estamos acostumrbado

///setInterval

let reloj=() => {
    let fecha=new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

setInterval(reloj,1000);   //esta función se ejecuta cada segundo