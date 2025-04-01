//Así es como creamosuna función normalmente

function miFuncion(){
    console.log("Hola Mundo!");
}
miFuncion();

//Podemos también hacerlo como una asignación de variable

let miFuncion2=function(){
    console.log("Hola Mundo!");
}
miFuncion2();

//Una función flecha se crea dela siguiente manera, ya no tenemos que escribir la palabra function
//Es como una asignación de variable y luego van estossimbolos ()=>{  cuerpo de la funcion }

let miFuncion3=()=>{
    console.log("Hola Mundo!");
}
miFuncion3();

//No hay necesidad de abrir el cuerpo de la función si solo es una linea la instrucción 

let miFuncion4=()=>console.log("Hola Mundo!");

miFuncion4();

//otro ejemplo 
let saludar0=()=>{return "hola mundo saludo1"};

console.log(saludar0());//como es con return toca usar console.logpor fuera


//fORMA DE HACERLO SIMPLIFICADA , NO ES NECESARIO ABRIR CUERPO NI USAR RETURN 
let saludar=()=>"Hola mundo saludo";

saludar();

//PODEMOS DEVOLVEROBJETOS TAMBIEN 

let saludarObjeto=()=>({nombre:"Mateo"}); //se se usa ( {porpiedad}) los parentesis para no confundir un objeto delcuerpo de una funcion

console.log(saludarObjeto());

//FUNCIONES con parametros
let saludar3=(mensaje)=>console.log(mensaje);

saludar3("Hola Mundoooo!");

//si tiene un solo parametro podemos evitar los parentesis

let saludar4=mensaje=>console.log(mensaje);

saludar4("Hola Mundoooo!");

///con varios parametros
let suma=(a,b)=>a+b;

console.log(suma(2,3));

let potencia=(a,b,c)=>{
    resultado=Math.pow((a+b),c)
    return `RESULTADO: ${resultado}`
}

console.log(potencia(2,3,2));

