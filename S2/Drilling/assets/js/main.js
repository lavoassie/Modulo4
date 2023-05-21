
let btnSubmit = document.querySelector("button");

btnSubmit.addEventListener("click", function(){
    let semanas = document.getElementById("semanas").value;
    let dias = document.getElementById("dias").value;
    generarRutina(semanas,dias)
})


const generarRutina =(semanas, dias)=>{
const ejercicios = ["sentadillas", "peso muerto", "banco", "prensas"];
const rutina = [];
let indexEjercicio = 0;
for(let i = 1; i <= semanas * dias; i++){
    let ejercicio = ejercicios[indexEjercicio]
    rutina.push(`Día: ${i}: ejercicio: ${ejercicio}`)
    indexEjercicio++
    if (indexEjercicio >= ejercicios.length) {
        indexEjercicio = 0;
    }
}
console.log(rutina);
}


