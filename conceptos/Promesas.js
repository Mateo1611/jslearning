//acá vamos autilizar funciones de tipo calllback 
//La promesa es un codigo que mientras se ejecuta está como pendiente, apenas
//la promesa se termina pasa a ser o resolved en este cao usamos .then() o  rejected y en este caso .catch() 

let miPromesa=new Promise((resolver, rechazar)=>{

    let expresion=false;
    if(expresion)
        resolver ("resolvió correctamente");
    else
        rechazar("se produjo un error") ;

});

miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error));   

//Promesa con setTimeout

let miPromesa2=new Promise((resolver)=>{
    console.log("Promesa inicio");//esto comprube la asincronía 
    
    setTimeout(()=>resolver("Promesa resuelta con setTimeout"), 3000);

    console.log("Promesa finalizada");//esto comprueba la asincronía 





})

miPromesa2.then(valor=>console.log(valor));

//comentario: pueden haber promesas dentro de promesas


//Palabra Async:simplifica la sintaxis para el uso de promesas//eneste caso una función regresa uanpromesa
async function miFuncionPromesa(){
    return "saludos con promesa y async"

}

miFuncionPromesa().then(valor=>console.log(valor));


//palabra await: 

async function miFuncionPromesaconAwait(){
    let miPromesa3=new Promise(resolver=>{resolver("promesa con await exitos")});

    console.log(await miPromesa3); //ESTO EVITA  USAR EL THEN 

}

miFuncionPromesaconAwait();

//todo junto
async function FuncionPromesaAwaitTimeout() { 
    let miPromesa5=new Promise(resolver=>{setTimeout(()=>resolver("promesa con awaity timeout"),3000)});
    console.log(await miPromesa5);
    console.log("fin");
}

FuncionPromesaAwaitTimeout();
