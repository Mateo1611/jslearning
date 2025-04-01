class Persona{
    static Contadorpersonas=0;
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido
        this.edad=edad;
        this.id=++Persona.Contadorpersonas;
    }

    get IdPersona(){
        return this.id;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(nombre){
        this.nombre=nombre;
    }
    get Apellido(){
        return this.apellido;
    }
    set Apellido(apellido){
        this.apellido=apellido;
    }
    get Edad(){
        return this.edad;
    }
    set Edad(edad){
        this.edad=edad;
    }
    toString(){
    return `${this.id} ${this.nombre} ${this.apellido} ${this.edad}`;}
}

class Empleado extends Persona{
    static ContadorEmpleados=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.sueldo=sueldo;
        this.idE=++Empleado.ContadorEmpleados;
    }
    get IdEmpleado(){
        return this.idE;
    }
    get Sueldo(){
        return this.sueldo;
    }
    set Sueldo(sueldo){
        this.sueldo=sueldo;
    }
    toString(){
        return `${super.toString()}  idE: ${this.idE}  ${this.sueldo}`;
    }


}

class Cliente extends Persona{
    static ContadorClientes=0;
     
     constructor(nombre,apellido,edad,fechadeRegistro)
    {   super(nombre,apellido,edad)
        this.fechadeRegistro=fechadeRegistro;
        this.idC=++Cliente.ContadorClientes;
    }
    get IdCliente(){
        return this.idC;
    }
    get FechaRegistro(){
        return this.fechadeRegistro;
    }
    set FechaRegistro(fechadeRegistro){
        this.fechadeRegistro=fechadeRegistro;
    }
    toString(){
        return `${super.toString()} ${this.idC} ${this.fechadeRegistro}`;
    }
}


    //Prueba
    let persona1=new Persona("Mateo","Gonzalez",25);
    console.log(persona1.toString());
    let empleado1=new Empleado("Daniel","Perez",29,1000);
    console.log(empleado1.toString());
    let cliente1=new Cliente("Juana","Trujillo",19,"2021-01-01");
    console.log(cliente1.toString());
    cliente1.FechaRegistro="2021-02-02";
    console.log(cliente1.toString());
    console.log(cliente1.FechaRegistro)


        

    