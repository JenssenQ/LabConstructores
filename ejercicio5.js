const prompt = require("prompt-sync")();

function Vehiculo(marca, motor, modelo, precio) {
  this.marca = marca;
  this.motor = motor;
  this.modelo = modelo;
  this.precio = precio;
  this.enConsecionario = true;
  
  this.disponible = function(){
    if(!this.enConsecionario){
        return `El ${this.marca} no se encuentra en el concesionario`
    } else {
        return `El ${this.marca} se encuentra disponible`
    }
  }

  this.prestar = function(){
    if (!this.enConcesionario){
        return `No se puede prestar el ${this.marca} porque no se encuentra en el concesionario.`
    } else {
        this.enConcesionario = false;
       return `El ${this.marca} se puede prestar`
    }
  }

  this.listaVehiculo = function(){
        return `------Lista del vehículo------- 
        Marca: ${this.marca}. 
        Motor: ${this.motor}. 
        Modelo: ${this.modelo}.
        Precio: ${this.precio.toLocaleString()}
        Disponible: ${this.enConsecionario}`
        
    }
}

console.log("------------------ Lista 1er vehículo ------------------");
const pedidoMarcaUsuario1 = prompt("Marca del vehículo: ");
const pedidoMotorUsuario1 = prompt("Vehículo manual o vehículo eléctrico: ");
const pedidoModeloUsuario1 = prompt("Año del modelo del vehículo: ");
const pedidoPrecioUsuario1 = prompt("Precio del vehículo: ");

console.log("------------------ Lista 2do vehículo ------------------");
const pedidoMarcaUsuario2 = prompt("Marca del vehículo: ");
const pedidoMotorUsuario2 = prompt("Vehículo manual o vehículo eléctrico: ");
const pedidoModeloUsuario2 = prompt("Año del modelo del vehículo: ");
const pedidoPrecioUsuario2 = prompt("Precio del vehículo: ");

console.log("------------------ Lista 3er vehículo ------------------");
const pedidoMarcaUsuario3 = prompt("Marca del vehículo: ");
const pedidoMotorUsuario3 = prompt("Vehículo manual o vehículo eléctrico: ");
const pedidoModeloUsuario3 = prompt("Año del modelo del vehículo: ");
const pedidoPrecioUsuario3 = prompt("Precio del vehículo: ");
console.log("--------------------------------------------------------");

const pedidoUsuario1 = new Vehiculo(
  pedidoMarcaUsuario1,
  pedidoMotorUsuario1,
  Number(pedidoModeloUsuario1),
  Number(pedidoPrecioUsuario1.replaceAll(".", "")),
);

const pedidoUsuario2 = new Vehiculo(
  pedidoMarcaUsuario2,
  pedidoMotorUsuario2,
  Number(pedidoModeloUsuario2),
  Number(pedidoPrecioUsuario2.replaceAll(".", "")),
);

const pedidoUsuario3 = new Vehiculo(
  pedidoMarcaUsuario3,
  pedidoMotorUsuario3,
  Number(pedidoModeloUsuario3),
  Number(pedidoPrecioUsuario3.replaceAll(".", "")),
);

console.log(pedidoUsuario1.listaVehiculo());
console.log(pedidoUsuario2.listaVehiculo());
console.log(pedidoUsuario3.listaVehiculo());

console.log(pedidoUsuario1.disponible());
console.log(pedidoUsuario1.prestar());
console.log(pedidoUsuario1.prestar());
console.log(pedidoUsuario1.disponible());

console.log(pedidoUsuario2.disponible());
console.log(pedidoUsuario2.prestar());
console.log(pedidoUsuario2.prestar());
console.log(pedidoUsuario2.disponible());

console.log(pedidoUsuario3.disponible());
console.log(pedidoUsuario3.prestar());
console.log(pedidoUsuario3.prestar());
console.log(pedidoUsuario3.disponible());








