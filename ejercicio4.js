function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
  this.prestado = false;
  this.prestar = function(){
    if (!this.prestado){
        this.prestado = true;
        return `${this.titulo} ya se encuentra prestado`
    } else {
        return `No se puede prestar ${this.titulo} porque no se ha devuelto.`
    }
  }
  this.devolver = function(){
    if (this.prestado === true){
        this.prestado = false;
        return `${this.titulo} Se encuentra disponible`
    } else {
        return `No se puede devolver ${this.titulo} porque no estaba prestado.`
    }
  }
}

const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943);

console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro1.devolver());
