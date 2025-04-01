class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

}

class Raton extends DispositivoEntrada {
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    
    toString(){
        return `idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return `idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

class Monitor {
    static contadorMonitores=0;
    constructor(marca,tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`;
    }

}

class Computadora {
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;}
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;}

    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;}
        
    toString(){ 
        return `idComputadora: ${this._idComputadora}, nombre: ${this._nombre}, monitor: ${this._monitor}, teclado: ${this._teclado}, raton: ${this._raton}`;
            }

}

class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputador(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let mostrar="";
        for(let pc of this._computadoras){
            mostrar+=pc.toString()+"\n";
        }
        console.log(`Orden: ${this._idOrden}, Computadoras:\n${mostrar}`);
    }

}

//Prueba

let raton1 = new Raton("USB","Logitech");
let raton2 = new Raton("USB","Logitech");
let teclado1 = new Teclado("Blootooth","Logitech");
let teclado2 = new Teclado("USB","Logitech");
let monitor1 = new Monitor("Samsung","19");
let monitor2=new Monitor("lg","20");
let teclado3 = new Teclado("Blootooth","Asus");

let pc1 = new Computadora("PC1",monitor1,teclado1,raton1);
let pc2 = new Computadora("PC2",monitor2,teclado1,raton2);
let pc3 = new Computadora("PC3",monitor2,teclado2,raton1);
let pc4 = new Computadora(" PC4",monitor1,teclado2,raton1);

let orden1 = new Orden();
orden1.agregarComputador(pc1);
orden1.agregarComputador(pc3);
orden1.agregarComputador(pc4);
orden1.mostrarOrden();