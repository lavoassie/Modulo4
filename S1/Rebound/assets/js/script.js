// La aplicación será una calculadora de intereses y cuotas, que mostrará al usuario cuánto debe pagar, de acuerdo con la cantidad de cuotas en las que se le permitió dividir la cantidad ingresada.
// Para la lógica de negocio de esta aplicación, debes utilizar las nuevas declaraciones de variables, y la nueva forma de interpolar cadenas de ES6. Además, declarar al menos 3 funciones de flecha para realizar lassiguientes funciones:

// [x] Calcula el valor de las cuotas a pagar.
// [x] Calcula el valor del interés: 
// [x] Formatea el monto de las cuotas para incluir puntos en lugar de miles.


const btnCalcular = document.getElementById("btnCalcular");
let informacion = document.getElementById("texto");
let cuotas = document.getElementById("cuotas")

btnCalcular.addEventListener("click", function(){
let montoUsuario = parseFloat(monto.value);
let cuotaUsuario = parseFloat(cuotas.value);
//La función parseFloat() es útil cuando necesitas convertir cadenas que representan números en valores numéricos para realizar cálculos o validaciones.

const valorCuota =()=> montoUsuario / cuotaUsuario;
// console.log(valorCuota());

let tasaInteres = parseFloat(interes.value);
// console.log(tasaInteres)

const valorInteres = () => (montoUsuario * tasaInteres) / 100
console.log(valorInteres())
//dividir la cantidad del interes por la cantidad de cuotas y sumarlo a las cuotas.
let cuotitas = valorInteres() / cuotaUsuario;
let totalCuota = cuotitas + valorCuota();

// Formateando el monto de las cuotas para incluir puntos en lugar de miles.
//En este caso, utilizamos toLocaleString("es-ES") en la variable cuotaFormateada para especificar la configuración regional española y así obtener el formato con puntos para separar los miles.
let cuotaFormateada = totalCuota.toLocaleString("es-ES");
  informacion.innerHTML = `¡No te preocupes! puedes pagarlo en ${cuotaUsuario} cuotas de $${cuotaFormateada}`;
})

//Consultar: Por qué no arroja decimal
//no se puede subir a github 