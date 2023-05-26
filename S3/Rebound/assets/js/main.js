/*  [x]Los clientes pueden seleccionar 3 ingredientes gratis.
      [x]Los ingredientes seleccionados gratis se deben mostrar en la pantalla en: <p id="ingSeleccionados">
    [x]Sobre 3 ingredientes, el cliente debe pagar $800 c/u
      [x]querySelectorAll para obtener el valor de los input.
      [x]forEach que recorre cada checkbox seleccionado por el cliente para obtener el valor
      [x]Cada selección se sumará a la variable checkContador.
      [x]A > de 3 selecciones se contará como ingrediente extra
    []Al seleccionar los ingredientes gratis se debe proyectar en la ventana derecha el valor de la pizza XL (15.000)
    [x]Los ingredientes seleccionados EXTRA deben mostrarse en pantalla en: <p id="ingExtras">
    [x]El valor de los ingredientes seleccionados EXTRA deben mostrarse en la ventana derecha en "ingredientes extra" 
    []Al hacer click en "ingresar propina", se deben agregar $1.000 pesos como valor por defecto.
    []Al ingresar otro valor de propina, se debe ver reflejado el cambio en la pantalla.
    []Al hacer click en "enviar pedido con propina", se debe enviar un mensaje por medio de un alert: "Su propina de $2.500 ha sido enviada"
    []Si el pedido no tiene propina, el mensaje de alerta debe mostrar: "Aún no se ha definido una propina"
*/


const checkboxes = document.querySelectorAll('input[name="ingrediente"]');
const maximoGratis = 3; // Máximo número de checkboxes permitidos
let checkContador = 0; // Contador de checkboxes seleccionados
const costoBase = 15000; // Monto base, valor pizza XL
let ingSeleccionados = document.getElementById("ingSeleccionados");

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
      document.getElementById("tdExtras").innerHTML = ingredientesExtra
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
    //Mostrando los ingredientes gratis.
    let ingredientesGratisSeleccionados = obtenerIngredientesSeleccionados().slice(0, 3);
    document.getElementById("ingSeleccionados").innerHTML = ingredientesGratisSeleccionados;
    //Agregar el valor de la pizza XL
    //Mostrando los ingredientes extra.
    let ingredientesExtrasSeleccionados = obtenerIngredientesSeleccionados().slice(3);
    document.getElementById("ingExtras").innerHTML = ingredientesExtrasSeleccionados;

  });
});

