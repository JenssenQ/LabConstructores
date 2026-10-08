function Computador(marca, procesador, ram, precio) {
  this.marca = marca;
  this.procesador = procesador;
  this.ram = ram;
  this.precio = precio;
}

const computador1 = new Computador("ASUS", "Intel", 16, 1450000);
const computador2 = new Computador("LG", "Ryzen", 24, 2230000);
const computador3 = new Computador("HP", "Intel", 16, 1850000);
console.log(computador1);
console.log(computador2);
console.log(computador3);
