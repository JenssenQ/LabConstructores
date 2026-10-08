function Estudiante(nombre, curso, nota) {
  this.nombre = nombre;
  this.curso = curso;
  this.nota = nota;
  this.aprobado = nota >= 3.0;
  this.mostrarResultado = function () {
    if (!this.aprobado) {
      console.log(`El estudiante ${this.nombre} no aprobó`);
    } else {
      console.log(`El estudiante ${this.nombre} si aprobó`);
    }
  };
}

const estudiane1 = new Estudiante("Luis", "Once", 4.2);
const estudiane2 = new Estudiante("Diego", "Decimo", 2.9);
const estudiane3 = new Estudiante("Kevin", "Octavo", 1.5);
const estudiane4 = new Estudiante("Prada", "Once", 3.0);

estudiane1.mostrarResultado();
estudiane2.mostrarResultado();
estudiane3.mostrarResultado();
estudiane4.mostrarResultado();
