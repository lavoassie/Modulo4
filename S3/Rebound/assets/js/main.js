/*  [x]Los clientes pueden seleccionar 3 ingredientes gratis.
      [x]Los ingredientes seleccionados gratis se deben mostrar en la pantalla en: <p id="ingSeleccionados">
    [x]Sobre 3 ingredientes, el cliente debe pagar $800 c/u
      [x]querySelectorAll para obtener el valor de los input.
      [x]forEach que recorre cada checkbox seleccionado por el cliente para obtener el valor
      [x]Cada selección se sumará a la variable checkContador.
      [x]A > de 3 selecciones se contará como ingrediente extra
    [x]Proyectar el valor de la pizza XL (15.000) al cliente
    [x]Los ingredientes seleccionados EXTRA deben mostrarse en pantalla en: <p id="ingExtras">
    [x]El valor de los ingredientes seleccionados EXTRA deben mostrarse en la ventana derecha en "ingredientes extra" 
    []Al hacer click en "ingresar propina", se deben agregar $1.000 pesos como valor por defecto.
      []El input debe estar guardado en una variable
      []A esta variable, voy a activar un evento que al hacer click sobre el input va a mostrar la propina sugerida
    []Al ingresar otro valor de propina, se debe ver reflejado el cambio en la pantalla.
    []Al hacer click en "enviar pedido con propina", se debe enviar un mensaje por medio de un alert: "Su propina de $2.500 ha sido enviada"
    []Si el pedido no tiene propina, el mensaje de alerta debe mostrar: "Aún no se ha definido una propina"
*/


const checkboxes = document.querySelectorAll('input[name="ingrediente"]');
const maximoGratis = 3; // Máximo número de checkboxes permitidos
let checkContador = 0; // Contador de checkboxes seleccionados
const costoBase = 15000; // Monto base, valor pizza XL
const propina = 1000;
let inputPropina = document.getElementById("propina");

//Al hacer click sobre el input propina va a mostrar la propina sugerida (1000)
inputPropina.addEventListener("focus", function() {
  inputPropina.value = propina;
});

let ingSeleccionados = document.getElementById("ingSeleccionados");
//Al seleccionar los ingredientes gratis se debe proyectar en la ventana derecha el valor de la pizza XL (15.000)
document.getElementById("thValorPizzaXL").innerHTML = costoBase;
//For que recorre cada checkbox seleccionado por el cliente para obtener el valor
//Cada selección se sumará a la variable checkContador
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {

    if (this.checked) {
      checkContador++;
    } else {
      checkContador--;
    }

    //A > de 3 selecciones se contará como ingrediente extra
    if (checkContador > maximoGratis) {
      let ingredientesExtra = Math.max(0, checkContador - maximoGratis) * 800;
      let totalAPagar = costoBase + ingredientesExtra;
      console.log(totalAPagar);
      //El valor de los ingredientes seleccionados EXTRA deben mostrarse en la ventana derecha en "ingredientes extra"
      document.getElementById("tdExtras").innerHTML = ingredientesExtra;
    }

    //Mostrar en pantalla derecha los tres ingredientes gratis.
    function obtenerIngredientesSeleccionados() {
      var ingredientes = [];

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          ingredientes.push(checkbox.value);
        }
      });

      return ingredientes;
    }

    //Mostrando los ingredientes gratis al usuario.
    let ingredientesGratisSeleccionados = obtenerIngredientesSeleccionados().slice(0, 3);
    ingSeleccionados.innerHTML = ingredientesGratisSeleccionados;
    //Mostrando los ingredientes extra al usuario.
    let ingredientesExtrasSeleccionados = obtenerIngredientesSeleccionados().slice(3);
    document.getElementById("ingExtras").innerHTML = ingredientesExtrasSeleccionados;
  });
});


