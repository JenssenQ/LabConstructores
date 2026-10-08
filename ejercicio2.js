function Mascota (nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function(){
        return `------Descripción------- 
        Nombre: ${this.nombre}. 
        Especie: ${this.especie}. 
        Edad: ${this.edad} años.
        Peso: ${this.peso} KG.`
        
    }
}

const mascota1 = new Mascota("Onyx", "Perro", 7, 14);
const mascota2 = new Mascota("Paro", "Caballo", 9, 490);
const mascota3 = new Mascota("Urus", "Gato", 7, 5);
console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());

