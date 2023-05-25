//  [x]Los clientes pueden seleccionar 3 ingredientes gratis.
//      []Los ingredientes seleccionados gratis se deben mostrar en la pantalla en: <p id="ingSeleccionados">
//  [x]Sobre 3 ingredientes, el cliente debe pagar $800 c/u
//  []Al seleccionar los ingredientes gratis se debe proyectar en la ventana derecha el valor de la pizza XL (15.000)
//  []Los ingredientes seleccionados EXTRA deben mostrarse en pantalla en: <p id="ingExtras">
//  []Los ingredientes seleccionados EXTRA deben mostrarse en la ventana derecha como "ingredientes extra" y su valor
//  []Al hacer click en "ingresar propina", se deben agregar $1.000 pesos como valor por defecto.
//  []Al ingresar otro valor de propina, se debe ver reflejado el cambio en la pantalla.
//  []Al hacer click en "enviar pedido con propina", se debe enviar un mensaje por medio de un alert: "Su propina de $2.500 ha sido enviada"
//  []Si el pedido no tiene propina, el mensaje de alerta debe mostrar: "Aún no se ha definido una propina"

const checkboxes = document.querySelectorAll('input[name="ingrediente"]');
const maximoGratis = 3; // Máximo número de checkboxes permitidos
let checkContador = 0; // Contador de checkboxes seleccionados
const costoBase = 15000; // Monto base, valor pizza XL

// Añadir un controlador de eventos a cada checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Actualizar el contador según el estado del checkbox
    if (this.checked) {
        checkContador++;
    } else {
        checkContador--;
    }
    
    // Verificar si se ha excedido el límite
    if (checkContador > maximoGratis) {
        let ingredientesExtra = Math.max(0, checkContador - maximoGratis) * 800;
        let sumarMontoExtra = costoBase + ingredientesExtra;
        console.log(sumarMontoExtra);
    }
  });
});