//TODO: Agregar el número de usuario "normal" al azar.

//Capturando elementos del DOM que se utilizarán en el JS.
let parrafoVIP = document.getElementById("textVIP");
let parrafoNormal = document.getElementById("textNormal");
let labelNombre = document.getElementById("inputUsuarioVIP");
let inputNombre = document.getElementById("labelUsuarioVIP");
let botonVIP = document.getElementById("botonVIP");
let signVIP = document.getElementById("btnVIP");
let signNormal = document.getElementById("btnNormal");
let modalUsuario = document.getElementById("modalUsuario");

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

//Muestro sólo los botones al hacer click al botón que mostrará los inputs de la pestaña vip.
//Oculto el texto y el botón de la pestaña de usuario no-vip.
botonVIP.addEventListener("click", function (event) {
  event.preventDefault();
  this.classList.toggle("btn-warning");
  parrafoVIP.style.display = 'block';
  labelNombre.style.display = 'block';
  inputNombre.style.display = 'block';
  signVIP.style.display = 'block';
  signNormal.style.display = 'none';
  parrafoNormal.style.display = 'none';
})

// Creo clase Usuario con su constructor.
class Usuario {
  constructor(correo, contrasenia) {
    this.correo = correo;
    this.contrasenia = contrasenia;
  }

  // TODO: Agrego Modal en el método.
  saludar() {
    let html =`
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Bienvenido Usuario:</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Correo: ${this.correo} Contraseña: ${this.contrasenia} </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
      console.log(html);
      modalUsuario.innerHTML = html;
      console.log(modalUsuario);
  }
}

// Agrego evento al botón de iniciar sesión de la pestaña no-vip y captura datos del formulario.
signNormal.addEventListener("click", function (event) {
  event.preventDefault();
  this.classList.toggle("btn-primary");
  let correo = document.getElementById("email").value;
  let contrasenia = document.getElementById("contrasenia").value;

  // Creo instancia de un nuevo Usuario.
  const usuario1 = new Usuario(correo, contrasenia);
  console.log(usuario1);
  usuario1.saludar();
});

// Creo clase hija para el usuarioVIP.
class UsuarioVIP extends Usuario {
  constructor(nombreUsuario, correo, contrasenia) {
    super(correo, contrasenia);
    this.nombreUsuario = nombreUsuario;
  }

  // TODO: Agrego Modal en el método (falta mostrarlo en pantalla).
  saludar() {
    let html = '';


  }
}

// Agrego evento al botón de iniciar sesión VIP y captura datos del formulario.
signVIP.addEventListener("click", function (event) {
  event.preventDefault();
  let nombreUsuario = document.getElementById("inputUsuarioVIP").value;
  let correo = document.getElementById("email").value;
  let contrasenia = document.getElementById("contrasenia").value;
  console.log(nombreUsuario, correo, contrasenia);

  // Creo instancia para el UsuarioVIP.
  const usuarioVIP = new UsuarioVIP(nombreUsuario, correo, contrasenia);
  console.log(usuarioVIP);
  usuarioVIP.saludar();
});




// Código del Modal:
// `
{/* <div class="modal" tabindex="-1">
 <div class="modal-dialog">
  <div class="modal-content">
   <div class="modal-header">
   <h5 class="modal-title">Bienvenido Usuario:</h5>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
    <p>Correo: ${correo} Contraseña: ${contrasenia} </p>
   </div>
   <div class="modal-footer">
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   <button type="button" class="btn btn-primary">Save changes</button>
   </div>
 </div>
</div>
</div> */}
// `