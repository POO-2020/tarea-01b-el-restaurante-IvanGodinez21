import Precio from "./precio.js";
export default class Pedido{

    constructor(fecha,hora,cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = [];
    }

    getNumeroElementos(){
        return `${this.elementosPedidos.length}`
    }

    getNumeroProductos(){
        var productoNum = 0;
        this.elementosPedidos.forEach(elemento =>{
            productoNum = elemento.cantidad 
        })
        return productoNum;
    }

    getCostoTotal(){
        var costo = 0;
        this.elementosPedidos.forEach(elemento1 => {
            costo = elemento1.cantidad * elemento1.producto.costo.precio
        })
        return `${new Precio(costo).getPrecio()}`
    }

    agregarElemento(elemento1){
        return `${this.elementosPedidos.push(elemento1)}`
    }
            
    listarElementos(){
        console.log("-----Listado de Platillos-----")
        this.elementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcionpedido())
            
        })
    }

    getResumen(){
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} \n${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos.`
    }
}