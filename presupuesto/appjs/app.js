const ingresos = [
    new Ingreso("Sueldo", 2100),
    new Ingreso("Venta casa", 1000)
];

const egresos = [
    new Egreso("Servicios", 1400),
    new Egreso("Arriendo", 150)
];

let cargarApp = () => {
    console.log("cargarApp se ha ejecutado");
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = (totalEgresos() / totalIngresos()) ;
    
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
}

let totalIngresos = () => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

let formatoMoneda = (valor) => {
    return valor.toLocaleString('es-CO', { style: 'currency', currency: 'cop', minimumFractionDigits: 2 });
}

let formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-CO', { style: 'percent', minimumFractionDigits: 0 });
}

const cargarIngresos=()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML+=crearIngresoHTML(ingreso); //
}
document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" >
                    <ion-icon name="close-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const cargarEgresos=()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML+=crearEgresoHTML(egreso); //
}
document.getElementById("lista-egresos").innerHTML=egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje"> ${formatoPorcentaje(egreso.valor/totalIngresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn"  onclick="eliminarEgreso(${egreso.id})">
                    <ion-icon name="close-outline" ></ion-icon>
                </button>
            </div>
        </div>
        </div>
    
    `;
    return egresoHTML;
}

const eliminarIngreso = (id) => { 
   let indiceEliminar= ingresos.findIndex(ingreso=>ingreso.id===id);
   ingresos.splice(indiceEliminar,1);
   cargarCabecero();
   cargarIngresos();

}

const eliminarEgreso = (id) => { 
    let indiceEliminar2= egresos.findIndex(egreso=>egreso.id===id);
    egresos.splice(indiceEliminar2,1);
    cargarCabecero();
    cargarEgresos();
 
 }

 const agregarDato=()=>{
    let forma=document.forms["forma"];
    let tipo=forma["tipo"];
    let descripcion=forma["descripcion"];
    let valor=forma["valor"];
    if(descripcion.value!=="" && valor.value!=="" ){
        if(tipo.value==="Ingreso"){
            let ingreso=new Ingreso(descripcion.value,parseFloat(valor.value));
            ingresos.push(ingreso);
        }else{
            let egreso=new Egreso(descripcion.value,parseFloat(valor.value));
            egresos.push(egreso);
        }
        cargarCabecero();
        cargarIngresos();
        cargarEgresos();
        descripcion.value="";
        valor.value="";
        forma["tipo"].value="Ingreso";
    }
    else{
        alert("Todos los campos son obligatorios");
    }

 }



