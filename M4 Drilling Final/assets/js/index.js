
class Personajes {
    constructor(name, height, mass){
        this.name = name;
        this.height = height;
        this.mass = mass;
    }
}

const getPersonaje = (id) => {
    return new Promise(async (resolve,reject) => {
        try {
            let url = "https://swapi.dev/api/people/" + id;
            let response = await fetch(url);
            let data = await response.json();
            let {name, height, mass} = data;
            let nuevoPersonaje = new Personajes(name, height, mass);
            resolve(nuevoPersonaje);
        } catch (error) {
            reject();
        }

    })
};

function* generador1(){
    yield getPersonaje(1);
    yield getPersonaje(2);
    yield getPersonaje(3);
    yield getPersonaje(4);
    yield getPersonaje(5);
}

let gen = generador1();

const consultarTarjeta = function(id) {
    const { value, done } = gen.next();
    let div = document.getElementById(id);
    if (done) {
        console.log('No hay más personajes para mostrar');
    } else {
        let html = div.innerHTML;
        html += `
        <div class="card shadow-lg p-3 mb-5 bg-body rounded">
          <span class="circle" data-range="1-5"></span>
          <div class="d-flex">
            <span class="${id}-circle"></span>
            <h5>Altura: ${value.height}</h5>
            <h5>Nombre: ${value.name}</h5>
            <h5>Peso: ${value.mass}</h5>
          </div>
        </div>
        `
        div.innerHTML = html;
    }
};

let tarjetaUno = document.getElementById("tarjetaUno");
let tarjetaDos = document.getElementById("tarjetaDos");
let tarjetaTres = document.getElementById("tarjetaTres");

tarjetaUno.addEventListener("click", (e) => {
    consultarTarjeta("tarjetaUno");
  });
  
  tarjetaDos.addEventListener("click", (e) => {
    consultarTarjeta("tarjetaDos");
  });
  
  tarjetaTres.addEventListener("click", (e) => {
    consultarTarjeta("tarjetaTres");
  });
  