1. ¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

R//: Sirve para tener una mejor estructura más contorlada de los objetos. En proyectos grandes con mucha información al querer agregar un nuevo objeto solo se necesitaría una línea de codigo.

2. ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

R//: Porque con this lo que estamos haciendo es ponerle una etiqueta a cada propiedad del objeto que entra para la función constructora, this apunta al objeto de quien lo esta ejecutando y eso se define antes del ".", es aislado porque cada objeto tiene sus propias propiedades.

3. ¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por si mismo su estado lógico (si aprobó o no)?

R//: La ventaja principal es que el objeto tiene encapsulada su propia lógica y estado, por lo que puede saber automáticamente si el estudiante aprobó o reprobó sin que otra parte del programa tenga que calcularlo.


4. ¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?

R//: Si el libro ya estuviera prestado y no existieran controles de estado, podría prestarse nuevamente de forma incorrecta, generando una inconsistencia en el sistema.

5. ¿Qué ventajas tiene permitir la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?

R//: Permite que sea la información ingresada por el usurio sea reutilizable porque no depende de datos específicos escritos dentro del código aligerando incluso la memoría del mismo.