class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_productos() { return 5; }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_productos) {
            this._productos.push(producto);
        } else {
            console.log("Ya se alcanzó el máximo de productos");
        }
    }

    calcularTotal() {
        let total = 0;
        for (let producto of this._productos) {
            total += producto.precio;
        }
        return total;
    }

    mostrarOrden() {
        let cadena = "";
        for (let producto of this._productos) {
            cadena += producto.toString() + "\n";
        }
        console.log(`Orden: ${this.idOrden}, Total: ${this.calcularTotal()}, Productos:\n${cadena}`);
    }
}

// Prueba

let producto1=new Producto("pantalón",200);
let producto2=new Producto("camisa",100);

let orden1=new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();


