export default class Precio {
    
    constructor(precio){
    this.precio = (precio).toFixed(2);
    }

    getPrecio(){
        return `${this.precio}`
    }
}