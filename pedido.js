export default class Pedido {
    /**
     * @param {string} fecha 
     * @param {number} elementos 
     * @param {number} cantidad 
     * @param {string} producto
     * @param {number} total 
     */
    constructor(fecha, hora, elementos, cantidad, producto, total) {
        this.fecha = fecha
        this.hora = hora
        this.elementos = elementos
        this.cantidad = cantidad
        this.producto = producto
        this.total = total
        this.elementosPedidos = []
    }
    getResumen() {
        return `Fecha: ${this.fecha}\nHora: ${this.hora}\nElementos: ${this.elementos}\nCantidad: x${this.cantidad} ${this.producto}\nTotal: ${this.total}`
    }
    getNumeroElementos() {
        return `No. de Elementos: ${this.elementos}`
    }
    getProductos() {
        return `No. de Productos: ${this.cantidad}`
    }
    getCostoTotal() {
        return `Costo total: ${this.total}`
    }
    agregarElemento(elemento1) {
        return `${this.elementosPedidos.push(elemento1)}`
    }
    listarElementos(){
        console.log("Listado de Elementos")
        this.elementosPedidos.forEach(elementos =>{
            console.log(elementos.getDescripcionpedido()) 
        })
    }
}