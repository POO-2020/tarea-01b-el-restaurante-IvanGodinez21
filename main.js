import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Direccion from "./direccion.js"
import Producto from "./producto.js";
import ElementoPedido from "./elementopedido.js";
import Pedido from "./pedido.js";
import Precio from "./precio.js";

class Main {
    probarFecha() {
        console.log(`<---------Fecha--------->`);
        //let dia = prompt("Ingresa el dia");
        //let mes = prompt("Ingresa el mes");
        //let año = prompt("Ingresa el año");
        //let fecha = new Fecha(dia, mes, año);
        let fecha = new Fecha(19, 2, 2000);
        console.log(`La fecha indicada es: ${fecha.getFecha()}`);
        console.log(`El día fue: ${fecha.getDiaFecha()}`);
        console.log(`Han pasado ${fecha.getAños()} años`);
        console.log(`Han pasado ${fecha.getMeses()} meses`);
        console.log(`Han pasado ${fecha.getSemanas()} semanas`);
        console.log(`Han pasado ${fecha.getDias()} días`);
    }
    probarTiempo() {
        console.log(`<---------Tiempo--------->`);
        let tiempo = new Tiempo(10, 10, "PM");
        console.log(`La hora en el formato 24HRS es: ${tiempo.getFormato24()}`);
        console.log(`La hora en el formato AM/PM es: ${tiempo.getFormato12()}`);
    }
    probarDireccion() {
        console.log(`<---------Direccion--------->`);
        let direccion = new Direccion("Avenida", "Siempre Viva", 123, "", "Buena vista");
        console.log(`La dirección corta: ${direccion.getFormatoCorto()}`);
        console.log(`La dirección extendida: ${direccion.getFormatoExtendido()}`);
    }
    probarProducto() {
        console.log(`<---------Producto--------->`);
        let costo1 = 200
        let costo2 = 100
        let producto1 = new Producto("Pizza", "Mexicana", "Grande", costo1);
        let producto2 = new Producto("Pizza", "Pepperoni", "Grande", costo2);
        console.log(`${producto1.getDescripcion()}`);
        console.log(`${producto2.getDescripcion()}`);
    }
    probarElementoPedido() {
        console.log(`<---------Elemento Pedido--------->`);
        let cantidad = 64;
        let costo1 = 200
        let producto = new Producto("Pizza", "Mexicana", "Grande", (cantidad * costo1)).getDescripcion();
        let pedido1 = new ElementoPedido(cantidad, producto);
        console.log(`${pedido1.getDescripcionpedido()}`);
    }
    probarPedido() {
        console.log(`<---------Pedido--------->`);
        let fecha = new Fecha(19, 2, 2000).getFecha();
        let hora = new Tiempo(10, 10, "PM").getFormato12();
        let elementos = 3;
        let cantidad = 5;
        let costo1 = 200
        let producto1 = new Producto("Pizza", "Mexicana", "Grande", (cantidad * costo1)).getDescripcion();
        let total = (cantidad * costo1) * elementos;
        let pedido = new Pedido(fecha, hora, elementos, cantidad, producto1, total);
        console.log(`${pedido.getResumen()}`);
        console.log(`${pedido.getNumeroElementos()}`)
        console.log(`${pedido.getProductos()}`)
        console.log(`${pedido.getCostoTotal()}`)
        console.log(`${pedido}`)
    }
}

let app = new Main
app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarProducto();
app.probarElementoPedido();
app.probarPedido();