class Personajes {
    constructor(name, height, mass){
        this.name = name;
        this.height = height;
        this.mass = mass;
    }
}

async function* generator(desde, hasta) {
  for (let i = desde; i <= hasta; i++) {
      let url = "https://swapi.dev/api/people/" + i;
      let response = await fetch(url);
      let data = await response.json();
      let { name, height, mass } = data;
      let nuevoPersonaje = new Personajes(name, height, mass);
      yield nuevoPersonaje;
    }
  }

  const primerGenerator = generator(1, 5);
  const segundoGenerator = generator(6, 11);
  const tercerGenerator = generator(12, 16);
  async function generadorTarjetas(id) {
    switch (id) {
      case "tarjetaUno":
        const primer = await primerGenerator.next();
        return primer;
      case "tarjetaDos":
        const segundo = await segundoGenerator.next();
        return segundo;
      case "tarjetaTres":
        const tercero = await tercerGenerator.next();
        return tercero;
    }
  }

async function consultarTarjeta(id) {
    const { value, done } = await generadorTarjetas(id);
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
  