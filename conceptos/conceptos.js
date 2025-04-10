var miNumero=15;
console.log(miNumero);

let miNumero2=20;
console.log(miNumero2);

let miEntero=30;
console.log(miEntero);
let miFloat=7.9;
console.log(miFloat);

let miCadena="Hola";
console.log(miCadena);

let miBoolean=true;
console.log(miBoolean);

let miNull=null;
console.log(miNull);

let miUndefined=undefined;
console.log(miUndefined);

// Operador type of : Nos da el tipo de dato que contiene cada variable 

console.log(typeof miNumero);
console.log(typeof miNumero2);
console.log(typeof miEntero);
console.log(typeof miFloat);
console.log(typeof miCadena);
console.log(typeof miBoolean);
console.log(typeof miNull);
console.log(typeof miUndefined);

//Hoisting = usar una variable y después se declara , esto no lo permite cuando usamos let, es mejor usar let para seguir buenas prácticas

x=10; //Inicializar la variable
console.log(x)
//y=5;
var x;
let y;
const MI_CONSTANT=20;
console.log(MI_CONSTANT);
console.log(Math.PI);//CONSTANT DE LA LIBRERIA Math

//Operadores decremento e incremento 
let a,b,c;

//Pre-Incremento
a=0;
++a;
console.log(a)
//Post- icremento
console.log(a++); //aca se usa la variable pero se incrementa para la proxima vez que se vuelva a usar,en esta linea vale lo mismo
console.log(a)

//Pre-decremento 
console.log(--a);
//post-decremento
console.log(a--) //acá vale uno , pero la proxima vez que se use a, va a valer 0 
console.log(a)

//ejemplo 
a=5;
b=10;
console.log(c=++a*b--); //6*10=10
console.log(c=a*b);//6*9

//Asignación 

a+=4;
console.log(a);

a-=4;
console.log(a);

a*=4;
console.log(a);

a%=5;
console.log(a);

a**=2;
console.log(a);

//Operadores de comparación

let d=5;
let e="5";
console.log(d==e);//son iguales en valor 
console.log(d===e);//es falso porque no son del mismo tipo de dato
console.log(d!=e);//
console.log(d!==e);//
console.log(d<e);//
console.log(d<=e);

//forma de imprimir
console.log("d==e -> ",d===e);//
//string interpolation
console.log(`${d}===${e} --> ${d===e}`);

//Operadores lógicos
a=d===e;
b=d!==e;
let k=d<=e;

console.log(`${b} && ${k} -> ${b && k}`)
console.log(`${b} && ${a} -> ${b&&a}`)
console.log(`${b} && ${!a} ->${b && !a}`)

 console.log(`${b} || ${a} -> ${b||a}`)
 console.log(`${b} || ${!a} ->${b ||!a}`)
 
 //Ejemplo

 let minimo = 0, maximo =5
 let dato=3

 console.log(dato>=minimo && dato<=maximo)
 dato=6;
 console.log(dato>=minimo && dato<=maximo)


 //Operador Ternario
miNumero =-5;

(miNumero>0)? console.log("positivo"): console.log("negativo");

//Sentencia switch ejemplo:

let diaSemana=3;

switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia no valido");
        break;
}

//while ejemplo imprimir valores del cero al cinco 

let i=0;
while(i<=5){
    console.log(i);
    i++;
}

//do while ejemplo imprimir valores del cero al cinco
 i=-1;
 do{
     console.log(i);
     i++;
 }while(i<=5);

 //ciclo for

 for(let i=0;i<=5;i++){
     console.log(i);
 }

for(i=1;i<=10;i+=3){
    console.log(i);
}
let suma=0;
for(i=1;i<=5;i++){
    console.log(suma=suma+i);
}
console.log(suma);

//impirmir suma con do while
suma=0;
i=1;
do{
    console.log(suma=suma+i);
    i++
}while(i<=5);
//ahora con while

i=1;
suma=0;
while(i<=5){
    console.log(suma=suma+i);
    i++
}

//Arreglos
let numerosArreglo = [];

numerosArreglo[0]=13;
numerosArreglo[1]=21; 
numerosArreglo[3]="hola";
console.log(`elemento 3->${numerosArreglo[2]}`);
console.log(`elemento 4->${numerosArreglo[3]}`);

numerosArreglo=[1,3,5,7,9,"numeros impares",true,false]

for(let j=0;j<numerosArreglo.length;j++) {
    console.log(`numerosarreglo[${j}]-->${numerosArreglo[j]}`);
}

//matrices
let matriz=[[],[]];

matriz[0][0]=1;
matriz[0][1]=2
matriz[0][2]=3;
matriz[1][0]=4;
matriz[1][1]=5;
matriz[1][2]=6;
for(i=0;i<matriz.length;i++){
    for(j=0;j<matriz[i].length;j++){
        console.log(`matriz[${i}][${j}]->${matriz[i][j]}`);
    }
}

console.log(matriz[1].length)

//otra manera de definir matrices

let matriz2=[[0,1,2,3],[4,5,6,7],[8,9,10,11]];//matriz de 3*4


//Funciones

//Paso valor(datos primitivos)
function cambiarValor(parametro){
    parametro=20;
    return parametro
}

let argumento=5;
console.log(cambiarValor(argumento));
console.log(argumento);//no afecta en nada, la que se cambió fue la variable parámetro

//Paso referencia(datos no primitivos) Array se pasan por referencia

function  cambiarValor2(parametro){
    parametro[0]=20;
    return parametro
}

let arreglo=[10];
console.log(`antes de la  función: ${arreglo[0]}`);
console.log(cambiarValor2(arreglo));
console.log(`despues de la función: ${arreglo[0]}`);
//Se puede observar que acá si cambian,porque están apuntando a la misma referencia en memoria

//Cadenas inmutables  (con cadenas pasa lo mismo que en ddatos primitivos)
function cambiarValor3(parametro){
        parametro="adiós";
        return parametro
}

let cadena="hola";
console.log(cadena);

console.log(cambiarValor3(cadena));

console.log(cadena);//No le hace nada, parametro y cadena son variables distintas, cadena solo se usa como un medio

//alcance variables

let variableGlobal=10;
variableGlobal=20;//SE Puede modificar todo el tiempo que sea en el programa principal o incluso en funciones
function Alcance(variableLocal)
{
    console.log(variableLocal); //esta solo vive aca, aparecera el ultimo valor obtenido por variableGlobal
    variableGlobal=30; //aca demostramos que se peude modificar durante todo el tiempo de vida del programa incluso acá,ya no va a valer 20
}
Alcance(variableGlobal);
console.log(variableGlobal);

//Funciones recursivas,se llaman a sí mismas, y necesitan un caso base

a=3

function recursiva(a){
    if(a==1){
        console.log(a);
        
        
    }
    else{
        console.log(a);
        recursiva(a-1);

        
    }
}
recursiva(a);
//otro ejemplo de función recursiva

function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(6));


//Funciones incorporadase en JS

let cadena1="hola"; //una cadena también es un objeto , al igual que un array,por lo tanto se puede acceder a atributos y métodos
console.log(cadena1.length); //tiene 4 caracteres
//no podemos modifica cadenas en JS //SON INMUTABLES,EJEMPLO:
cadena1[0]="x";
console.log(`${cadena1[0]}-->${cadena1}`);//No se modificó nada

//Si podemos asignar unanueva cadena
cadena1="adios";
console.log(cadena1);//se puede reasignar a la misma variable

//Recorrer
for(i=0;i<cadena1.length;i++){
    console.log(`${i}-->${cadena1[i]}`);
}

//Generar subcadenas
let cadena3="Hola don Ramón ";
console.log(a=cadena3.substring(0,4));
console.log(b=cadena3.substring(4));
//concatenar
console.log(c=a.concat(b));
//otra forma
console.log(b+a);
//otra  forma
console.log(`${a}  ${b}`);

//Convertir cadena a número
a="10";
b="20";
console.log(b+a); //se concatenan pero no es la idea
console.log(parseInt(a)+parseInt(b)); // con la función parseInt se logra

//Convertir de numero a cadena ( )
c=10;d=20;
console.log(c+d)

console.log(c.toString()+d.toString());//así se hace para convertir de numero a cadena
 //Valor absoluto
 a=-10
 console.log(Math.abs(a));
 
 //Redondeo
 a=8.5;
 b=8.4;
 c=8.6;
 console.log(Math.round(a),Math.round(b),Math.round(c));//si es mayo a .5 aproxima al mayor, si es menor al anterior

 //Truncar
 console.log(Math.trunc(a),Math.trunc(b),Math.trunc(c));//trunca a la parte entera(quita el decimal)

 //Maximo y minimo
 console.log(Math.max(a,b,c));
 console.log(Math.min(a,b,c));

 //Raiz cuadrada
 console.log(Math.sqrt(a));

 //Potencia
 console.log(Math.pow(a,2));
 console.log(Math.pow(b,2));
 console.log(Math.pow(c,2));

 //Numero aleatorio
 console.log(Math.floor(Math.random()*100));//genera un numero aleatorio entre 0 y 100

 //Objetos en Javascript, la diferencia con un primitivo es que este no tiene propiedades, mientras que el objeto sí(atributos y métodos)

 //ASÍ SE DEFINE UN OBJETO , LO DE ADENTRO SON LAS PROPIEDADES
let persona={
    nombre:"Ramon",
    apellido:"Perez",
    email:"rperez@gmail.com",
    edad:20,
//Metodo:
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido; //this apunta a este mismo objeto, este this no funciona por fuera de las llaves

}
}
//ASÍ ACCEDEMOS A LAS PROPIEDADES
 
console.log(persona.nombre);
console.log(persona.apellido);
//imprimir todo el objeto

console.log(persona);

console.log(persona.nombreCompleto());

//OTRA FORMA DE CREAR UN OBJETO

let persona2=new Object();//Acá solo lo crea en memoria ,aún no tiene propiedades, laspropiedades se le asignan así:
persona2.nombre="Daniel";
persona2.apellido="Ramirez";
persona2.email="rdr@gmail.com";
persona2.edad=27;
persona2.tel="5557878";

//otraforma de acceder a las propiedades,como si fuera un arreglo 
console.log(persona["apellido"]);

//Recorrer todas las propiedades del objeto con un for in

for(propiedad in persona2){
    console.log(`${propiedad}-->${persona2[propiedad]}`);
}

//Agregar y quitar propiedades a un objeto
persona.tel="5567898";
console.log(persona);
 //Para modificarka
 persona.tel="676532"
 console.log(persona);

 //Para eliminar usamos delete
 delete persona.tel; 
 console.log(persona);//ya no esta tel

 //Cómo imprimir un objeto (difenentes formas:ya hemos visto algunas , pero no son tan utiles trabajando desde el navegador)

 //1.concatenar
 console.log(persona.nombre+","+persona.apellido+","+persona.email);

//2.FOR IN (YA LA HABIA VISTO)
for(prop in persona){
    console.log(persona[prop]);
    console.log([prop])
}

//Object.values:Nos devuelve el objeto como un arreglo

console.log(Object.values(persona));

//JSON.stringify : cONVIERTE TODO EL objeto en una cadena

console.log(JSON.stringify(persona));

//usar console.log(persona); no serviría en el navegador ,retonaría solo la palabra Object

//Método get: es un metodo dentro del objeto llamado get para recuperar info,por ejemplo el metodo que ahora se llamaba obtenerNombrecomplero,se puede ver asi:
let persona3 = {
    nombre: "Ramon",
    apellido: "Perez",
    email: "rperez@gmail.com",
    edad: 20,
    idioma: "es",
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lan) {
        this.idioma = lan.toUpperCase();
    }
};

console.log(persona3.nombreCompleto); // Accede al método usando el getter,//console.log(persona.nombreCompleto()) ....Así se hacía sin el get
console.log(persona3.lang); // Obtiene el idioma en mayúsculas
persona3.lang = "eng"; // Usa el setter para cambiar el idioma------set
console.log(persona3.lang); // Verifica que el idioma haya cambiado, este sigue siendo el get
console.log(persona3.idioma); //
 
//METODO CONSTRUCTOR: CON LA PALABRA New
function Persona(nombre1,apellido1,email1){
    this.nombre=nombre1;
    this.apellido=apellido1;
    this.email=email1;
    //metodo en consructor
    this.nombreCompleto=function(){
        return this.nombre+" "+this.apellido;
    }
}

//crear diferentes objetos a partir de ese constructor
let padre=new Persona("Daniel","Perez","dp@gmail.com");//ya no tenemos que crear uno por uno 
console.log(padre);

let madre=new Persona("Juana","quintero","jq@gmail.com");

padre.nombre="Carlos";
console.log(padre);

console.log(padre.nombreCompleto());

//En algunos casos no es necesario el uso dela palabra New, por ejemplo: los string, los arreglos, las funciones son objetos de js 
//que tienen constructor también,sin embargo no los creamos con el New, sino de una manera mássimple ,ejempo:

let miObjeto=new Object();
let miObjeto2={}; //fORMA SIMPLIFICADA

let miArreglo=new Array();
let miArreglo2=[];//fORMA SIMPLIF

let miFuncion=new Function();
let mifuncion2=function(){}; //forma simple

let miString=new String("hola");
let miString2="hola";//Forma simple 

//prototype :sirve para agregar una nueva propiedad para todos los objetos instanciados opor instanciar, sinnecesidad de hacerlo desde el constructor

Persona.prototype.tel="000000"
console.log(padre.tel);
console.log(madre.tel);//ambos quedaron con lamisma propiedad
//si se quiere modificar uno
padre.tel="55555";
console.log(padre.tel);//modificado
console.log(madre.tel);//no modificado

//Metodo call:Sirve para usar un metodo que tiene otro objeto

let persona4={
    nombre:"Ramon",
    apellido:"Perez",
    
    nombreCompleto:function(titulo,tel)//le podemos pasar otros parametros
    {
        return titulo + ":" + this.nombre+" "+this.apellido + ","+ tel;
    }}
    
let persona5={
    nombre:"Daniel",
    apellido:"Ramirez"
    //este objeto no tiene ningun metodo, pero queremos usar el de persona4
    
}

//uso de call para usar el metodo persona4.nombreCompleto con los datos de persona5
console.log(persona4.nombreCompleto.call(persona5));//el und es por los  otros parametros dentro delmetodo
console.log(persona4.nombreCompleto.call(persona5,"Ing","8888"));//
//Uso de aplly: es muy similar a call ,pero los parametros adicionales se le pasan a través de un arreglo
let per=["Doc","9999"] //este es el arreglo que se le va  a pasar
console.log(persona4.nombreCompleto.apply(persona5, per));

//clases en js: plntilla donde se definen atributos y metodos , para instanciar objetos

class Person{
    static contadorObjetosPersona=0; //atributo estatico
    email="Por defecto"; //atributo no estático
    constructor(nombre,apellido){
        this._nombre=nombre; //this.nombre(atributo)       nombre(parámetro),elparametro se asigna como atributo
        this._apellido=apellido;
        Person.contadorObjetosPersona++;//no usamos this. por ser n atributo estático
        this._id=Person.contadorObjetosPersona;
    
}
    get nombreCompleto(){
        return this._nombre + " " +this._apellido;}
    
    set nombreCompleto(nombre){
        this._nombre=nombre;
    }
    saludo(){
        return this._id + "Hola me llamo:" + this._nombre;
    }

    //sobreescribiendo el metodo de la clase padre Object
    toString(){
        //Polimorfismo
        return this.saludo();
    }
    //static
    static saludar(){
        console.log("saludos desde static");
    }
    static saludar2(Person){
    console.log(Person.nombreCompleto+" dice hola desde static ");
}
}

let estudiante1= new Person("Andres", "Ramirez");
console.log(estudiante1);
console.log(estudiante1.nombreCompleto);//Usamos get
estudiante1.nombreCompleto="Juan Carlos";//Usamos set
console.log(estudiante1.nombreCompleto);//usamos get de nuevo
console.log(estudiante1._nombre); //aquí fuimos a buscar directamente el atributo

//No se puede crear un objeto de una clase, si la clase no fue definida previamente

///HERENCIA:UNA CLASE HEREDA TODOS LOS METODOS Y ATRIBUTOS DE OTRA CLASE Y PUEDE TENER OTROS METODOS O ATRIBUTOS DIFERENTES A LA DE SU CLASE PADRE


class Empleado extends Person{
    constructor(nombre,apellido,dependecia){
        super(nombre,apellido);//es necesario esto para llamar al constructor de la clase padre
        this._dependecia=dependecia;}

        get dependencia(){
            return this._dependecia;
        }

        //sobreescritura de algun metodo para adaptarlo a la nueva clase
        saludo(){//debe ser el mismo nombre del metodo que se trae, en este caso saludo()
            return super.saludo() + " y soy de la dependencia:" + this._dependecia;//usando super.nombreMetodo()
        }


    }


    let empleado1=new Empleado("Joaquin David","Ramirez","Sistemas");
    console.log(empleado1.nombreCompleto);//Este es un metodo de la clase padre Person,no de empleado(esheredado)
    console.log(empleado1.dependencia);
    console.log(empleado1.saludo());

    //Si no agregamos de manera explicita extends, de manera automatica JS hace un extends de la clase Object:clase padre de todas las 
    //esta contiene muchos métodos por ejemplo metodo : toString

    console.log(empleado1)
    console.log(empleado1.saludo());

    //Polimorfismo es cuando un método se puede modificar en la clase hijo(mismo metodo con diferentes resultados dependiendo del objeto o la clase)
    console.log(empleado1.toString());
    console.log(estudiante1.toString());//mismo metodo , diferente resultado, vienen de clases diferentes
                                
    //otro ejemplo de polimorfismo: Busque en chat gpt ( o recuerde el de las areas y el de los sonidos de los animale)

    //PALABRA STATIC : Métodos que se asocian directamente con la clase exclusivamente
    // en clase Person arriba agregamos static saludar(){ console.log("saludos desde static")}
    //ahora podemos llamarlo de la siguiente manera:
    
    //estudiante1.saludar(); no es posible llamar un método estatico desde un objeto,debe ser directamente desde la clase
    Person.saludar();//aqui no hay error, se imprime en terminal
    Person.saludar2(estudiante1);//metodo estatico con parametro: Juan Carlos dice hola desde static
    //Los metodos estaticos también se  heredan
    Empleado.saludar2(empleado1);

    //Atributos estaticos
    console.log(Person.contadorObjetosPersona);//se debe acceder desde la clase
    console.log(Empleado.contadorObjetosPersona);//herencia 
    let estudiante2=new Person("Efraín","Medina");
    console.log(Person.contadorObjetosPersona);

    //se pueden definir atributos asociados a los objetos, es decir no estáticos por fuera del constructor , a estos no se pueden acceder
    //a través de la clase,ejemplo en Person el atributo email="por defecto";
    
    console.log(estudiante1.email);
console.log(empleado1.email);
//console.log(Person.email); así no se puede por no ser un elemento static

//Para crear constantes estaticas, es decir que no puedan ser modificadas, debe ser a traves de un metodo estatico, ver la clase 101 si no lo recuerda





    





   






    





 


