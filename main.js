import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Direccion from "./direccion.js"
import Producto from "./producto.js";
import ElementoPedido from "./elementopedido.js";

class Main {
    probarFecha() {
        console.log(`<---------Fecha--------->`);
        //let dia = prompt("Ingresa el dia")
        //let mes = prompt("Ingresa el mes")
        //let año = prompt("Ingresa el año")
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
        let direccion = new Direccion("Avenida", "Siempre Viva", 123, "", "Buena vista")
        console.log(`La dirección corta: ${direccion.getFormatoCorto()}`)
        console.log(`La dirección extendida: ${direccion.getFormatoExtendido()}`)
    }
    probarProducto() {
        console.log(`<---------Producto--------->`);
        let producto = new Producto("Pizza", "Mexicana", "Grande", 200)
        console.log(`${producto.getDescripcion()}`)
    }
    probarElementoPedido() {
        console.log(`<---------Elemento Pedido--------->`);
        let pedido = new ElementoPedido(64, new Producto("Pizza", "Mexicana", "Grande", 200).getDescripcion())
        console.log(`${pedido.getDescripcionpedido()}`)
    }
}

let app = new Main
app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarProducto();
app.probarElementoPedido();