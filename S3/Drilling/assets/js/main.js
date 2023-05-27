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
let correos = document.getElementById("correosCC");
let correosCC = [];

botonEnviar.addEventListener("click", function(e) {
  e.preventDefault();
  let correosArrays = correos.value.split(",")
  console.log(`PARA: ${inputDestinatario.value} \n TÍTULO: ${inputTitulo.value} \n MENSAJE: ${inputMensaje.value} \n FROM: ${inputRemitente.value}`);
  for(let i of correosArrays){
    if(i != ""){
      console.log(`cc: ${i}`);
    }
  }
});