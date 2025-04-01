const personas=[new Persona("Juan","Perez"),new Persona("Leidy","Ramirez")];

function mostrarPersonas(){
    console.log("MostrarPersonas...");
    let texto="";
    for(let persona of personas){
        console.log(persona);
        texto+=`<li> ${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById("personas").innerHTML=texto;

}

function agregarPersonas(){
    let forma=document.forms["forma"];
    let nombre=forma["nombre"];
    let apellido=forma["apellido"];
    if(nombre.value!="" && apellido.value!=""){
    let persona=new Persona(nombre.value,apellido.value);
    personas.push(persona);
    mostrarPersonas();}

    else{
        alert("Debe llenar ambos campos");
    }

}
