var estudiantes =[];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}

function DatosDelEstudiante (nombre,puntosTecnicos,puntosHSE){ // lo ponemos afuera de la funcion para  que  lo volvamos a usar, creamos un objeto constructor para almacenar los datos / siempre debe ser mayuscula la primero
  this.nombre = nombre;
  this.puntosTecnicos = puntosTecnicos;
  this.puntosHSE = puntosHSE;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingresa tu nombre").toLowerCase(); //estamos preguntando al usuario sus datos
    var puntosTecnicos = prompt("Ingresa tus puntos Técnicos");
    var puntosHSE = prompt ("¿Cuántos puntos HSE Tienes");


    var alumno = new DatosDelEstudiante(nombre,puntosTecnicos,puntosHSE);// creas  la variable y llamas el constructor
    estudiantes.push(alumno);
    return alumno;//regresamos el  ultimo dato que ingresamos
  }




function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
  var resultados = ""; // utilizazmos  un string vacio  para  que podamos  mostrar  la  lista  en el.

  estudiantes.forEach(function (alumno){resultados += mostrar (alumno)});
  return resultados;


}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS.

      var buscarEstudiante = estudiantes.filter(function(busquedaEstudiante){
        return busquedaEstudiante.nombre.toLowerCase() === nombre.toLocaleLowerCase();});
          return buscarEstudiante; //devolver el resultado
}




function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

      return estudiantes.sort(function( a, b){
      return a.puntosTecnicos < b.puntosHSE;});
    }


function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
      return estudiantes.sort(function( a, b){
      return a.puntosHSE < b.puntosHSE;});
}
