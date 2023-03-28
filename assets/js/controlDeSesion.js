const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

// buscar en storages o dejar vacio
// si existe la sesion, borrar barra de login/registo
let usuarioLogueado = localStorage.getItem('usuario')

if (usuarioLogueado) {
  alternarBarraCarrito()
} else {
  alternarBarraSesion()
}

const btnRegistro = document.getElementById('btnRegistro');
const btnIngresar = document.getElementById('btnIngresar');
const btnDesloguearse = document.getElementById('btnDesloguearse')
const btnModificarDatos = document.getElementById('btnModificarDatos')

btnRegistro.onclick = () => mostrarModalRegistro();
btnIngresar.onclick = () => mostrarModalIngreso();
btnDesloguearse.onclick = () => desloguearUsuario();
btnModificarDatos.onclick = () => modificarDatos();


function mostrarModalRegistro() {
  Swal.fire({
    title: 'Registrar',
    html:
      '<input id="input-nickname" class="swal2-input" placeholder="Ingrese su Nombre">' +
      '<input id="input-username" class="swal2-input" placeholder="Ingrese su usuario">' +
      '<input id="input-password" type="password" class="swal2-input" placeholder="Ingrese su contraseña">' +
      '<input id="input-direccion" class="swal2-input" placeholder="Ingrese su direccion">' +
      '<div>Recordarme <input type="checkbox" id="recordar" name="recordar" value="recordar"></div>',
    focusConfirm: false,
    preConfirm: () => {
      // obtener los datos del formulario
      // acceder a lista de usuarios y chequear si existe uno con mismo username
      // si existe, mostrar mensaje de error
      // si no existe, crear usuario y agregarlo a la lista de usuarios
      const nuevoUsuario = {
        nickname: document.getElementById('input-nickname').value,
        username: document.getElementById('input-username').value,
        password: document.getElementById('input-password').value,
        direccion: document.getElementById('input-direccion').value,
      }

      const recordar = document.getElementById('recordar').checked

      const usuarioYaExiste = usuarios.find((usuario) => usuario.username === nuevoUsuario.username)

      if (usuarioYaExiste) {
        mostrarErrorDeRegristro()
      } else {
        registrarUsuario(nuevoUsuario)

        if (recordar) {
          localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
          
        } else {
          sessionStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
        }
      }
    }
  })
}

function registrarUsuario(usuario) {
  usuarios.push(usuario)

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alternarBarraSesion()
  alternarBarraCarrito()
}

function mostrarErrorDeRegristro() {
  Swal.fire('Este usuario ya existe. \nVolvé a intentar el registro.')
}



function mostrarModalIngreso() {
  Swal.fire({
    title: 'Ingresar',
    html:
      '<input id="input-username" class="swal2-input" placeholder="Ingrese su usuario">' +
      '<input id="input-password" type="password" class="swal2-input" placeholder="Ingrese su contraseña">' +
      '<div>Recordarme <input type="checkbox" id="recordar" name="recordar" value="recordar"></div>',
    focusConfirm: false,
    preConfirm: () => {
      const username = document.getElementById('input-username').value
      const password = document.getElementById('input-password').value
      const recordar = document.getElementById('recordar').checked
      const usuario = usuarios.find((usuario) => usuario.username === username)

      if (usuario === undefined) {
        mostrarErrorUsuarioInexistente()
      } else if (usuario.password != password) {
        mostrarErrorContraseniaIncorrecta()
      } else {
        if (recordar) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
        } else {
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
        }

        alternarBarraCarrito();
        alternarBarraSesion();
      }
    }
  })
}

function mostrarErrorUsuarioInexistente() {
  Swal.fire('Este usuario no existe. \nVolvé a ingresar el usuario correcto.')
}

function mostrarErrorContraseniaIncorrecta() {
  Swal.fire('La contraseña es incorrecta.')
}

function desloguearUsuario() {
  localStorage.removeItem('usuario');
  alternarBarraSesion();
  alternarBarraCarrito();

}

function modificarDatos() {
  const usuarioLogueado = JSON.parse(localStorage.getItem('usuario') || sessionStorage.getItem('usuario'))
  let usuarios = JSON.parse(localStorage.getItem('usuarios'))
  
    Swal.fire({
      title: 'Modificar',
      html:
        `<input id="input-nickname" class="swal2-input" value="${usuarioLogueado.nickname}">` +
        `<input id="input-username" class="swal2-input" value="${usuarioLogueado.username}">` +
        `<input id="input-password" type="password" class="swal2-input" value="${usuarioLogueado.password}">` +
        `<input id="input-direccion" class="swal2-input" value="${usuarioLogueado.direccion}">`,
      focusConfirm: false,
      preConfirm: () => {
        const nuevosDatos = {
          nickname: document.getElementById('input-nickname').value,
          username: document.getElementById('input-username').value,
          password: document.getElementById('input-password').value,
          direccion: document.getElementById('input-direccion').value,
        }
  
        usuarios = usuarios.map(usuario => {
          if (usuario.username === usuarioLogueado.username) {
            return { ...usuario, ...nuevosDatos };
          }
          return usuario;
        });
  
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
        const usuarioRecordado = localStorage.getItem('usuario') // null o string
        const nuevoUsuario = usuarios.find(usuario => usuario.username === usuarioLogueado.username);
  
        if (usuarioRecordado) {
          localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
        } else {
          sessionStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
        }
      }
    });
  










  /*const usuarioLogueado = JSON.parse(localStorage.getItem('usuario') || sessionStorage.getItem('usuario'))
  const nuevoUsuario = JSON.parse(localStorage.getItem('usuario') || sessionStorage.getItem('usuario'))

  Swal.fire({
    title: 'Modificar',
    html:
      `<input id="input-nickname" class="swal2-input" value="${usuarioLogueado.nickname}">` +
      `<input id="input-username" class="swal2-input" value="${usuarioLogueado.username}">` +
      `<input id="input-password" type="password" class="swal2-input" value="${usuarioLogueado.password}">` +
      `<input id="input-direccion" class="swal2-input" value="${usuarioLogueado.direccion}">`,
    focusConfirm: false,
    preConfirm: () => {
      const nuevosDatos = {
        nickname: document.getElementById('input-nickname').value,
        username: document.getElementById('input-username').value,
        password: document.getElementById('input-password').value,
        direccion: document.getElementById('input-direccion').value,
      }

      usuarios.forEach(usuario => {
        if (usuario.username === usuarioLogueado.username) {
          return nuevosDatos
        }
        return usuario
      });

      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      const usuarioRecordado = localStorage.getItem('usuario') // null o string

      if (usuarioRecordado) {
        localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
      } else {
        sessionStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
      }
    }
  })*/
}

function alternarBarraSesion() {
  const barraSesion = document.getElementById('barra-sesion');
  barraSesion.classList.toggle('mostrar')
}

function alternarBarraCarrito() {
  //barra-carrito
  const barraCarrito = document.getElementById('barra-carrito');
  barraCarrito.classList.toggle('mostrar')
  
  /*const usuarioLogueado = JSON.parse(localStorage.getItem('usuario') || sessionStorage.getItem('usuario'))
  
  const spanUsername = document.getElementById('nombre-usuario');
  spanUsername.innerText = usuarioLogueado.nickname*/
}


