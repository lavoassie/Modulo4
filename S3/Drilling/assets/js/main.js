//  []Obtener los valores de inputs y botón.
//      [x]guardar en una variable los inputs y botón.
//  []Mostrar en consola: para, titulo, mensaje, from
//  []Mosotrar en consola los emails CC
//  []Incluir múltiples correos electrónicos como destinatarios de CC. 
//  []Utilizando al menos un parámetro Rest y un bucle for of.

let inputDestinatario = document.getElementById("inputDestinatario");
let inputTitulo = document.getElementById("inputTitulo");
let inputMensaje = document.getElementById("inputMensaje");
let inputRemitente = document.getElementById("inputRemitente");
let botonEnviar = document.getElementById("btnEnviar");
let correos = document.getElementById("correosCC").value;
let correosCC = [];

botonEnviar.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(`PARA: ${inputDestinatario.value} \n TÍTULO: ${inputTitulo.value} \n MENSAJE: ${inputMensaje.value} \n FROM: ${inputRemitente.value}`);
});

for(let correo of correos){
  correosCC.push(correos)
  console.log(correo);
}

//Honestamente no pude terminar esta tarea :(lo intente mucho 