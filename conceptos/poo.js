class Empleado{
    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    ObtenerDetalles(){
        return `Empleado->Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento=departamento;
    }

    ObtenerDetalles(){
        return `Gerente->${super.ObtenerDetalles()} dep:${this.departamento}`;//sesobreescribe el metodo de la clase padre
    }

}

function Imprimir(tipo){
    console.log(tipo.ObtenerDetalles());
    if (tipo instanceof Gerente){ //instance of es para saber de que clase viene el objeto instaciado
        console.log("Es un objeto de tipo Gerente");
    }
    else if (tipo instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
    }
}



let empleado1=new Empleado("Daniel",6000);
let gerente1=new Gerente("Carlos",5000,"sistemas");

console.log(gerente1.ObtenerDetalles());

Imprimir(gerente1);
Imprimir(empleado1);//Imprime el mismo método,pero con los resultados adaptados a cada clase poliformismo