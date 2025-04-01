"use strict";
try{
    
   // x=10;
   miFuncion();  //el  catch solo se ejecuta si hay el error,pero finally se ejecuta siempre
}
catch(error){
    
    console.log(error);

}
finally{
    console.log("Se ejecuta siempre");
}
console.log("continuamos..");

//throw se usa para crear nuestros propios errores 

let resultado="6";

try{
    if(isNaN(resultado)) throw "No es un numero";
    else if(resultado=="") throw "Cadena Vacía";
    else if(resultado<0) throw "Resultado Negativo";
    else if(resultado>0) throw "Está melo ";
}
catch(error){
    console.log(error);
    //console.log(error.name); esto se usa cuando no es un error creado por nosotros
   // console.log(error.message);
}
finally {console.log("terminamos revision de errores");}