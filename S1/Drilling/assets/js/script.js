// Cuando el usuario completa el formulario, y hace clic en el botón enviar, debe aparecer una alerta en el siguiente formato, el cual será interpolado completamente usando la nueva forma de ECMAScript 6 para interpolar cadenas:

// [] Obtener datos del usuario
//    [] Guardar esos datos en una variable
// [] Proyectar como un mensaje de formulario enviado.


document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("email").value;

    let select = document.getElementById('select');
    let value = select.options[select.selectedIndex].value;

    let mensaje = document.getElementById("mensaje").value;

    alert(`DE: ${nombre} ${apellido} (${correo}) \n ASUNTO: ${value} \n MENSAJE: ${mensaje} `)
})