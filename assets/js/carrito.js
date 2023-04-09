let productos = []; //se declara la variable para despues parsearla desde el json

let saldo = 0;

let alertaCarrito = false;

//Se llama al json con un evento para que la asincronia no afecte a la carga de datos por eso el listener al cargar el dom
document.addEventListener("DOMContentLoaded", cargarProductos);

const btnVerCarrito = document.getElementById("verCarrito");
btnVerCarrito.addEventListener("click", verCarrito);

const btnConfirmar = document.getElementById("btnConfirmar");
btnConfirmar.addEventListener("click", funcionConfirmarCompra);

const btnOrdearAA = document.getElementById("ordenarAA");
btnOrdearAA.addEventListener("click", ordenarAlfabeticamenteAsc);

const btnOrdearAD = document.getElementById("ordenarAD");
btnOrdearAD.addEventListener("click", ordenarAlfabeticamenteDes);

const btnOrdearPA = document.getElementById("ordenarPA");
btnOrdearPA.addEventListener("click", ordenarNumericamenteAsc);

const btnOrdearPD = document.getElementById("ordenarPD");
btnOrdearPD.addEventListener("click", ordenarNumericamenteDes);

const inputBusqueda = document.getElementById("buscarProductos");
inputBusqueda.addEventListener("input", (event) => {
  const criterio = document.getElementById("opcionBusqueda").value
  const valorDeBusqueda = event.target.value;

  filtrarProductos(criterio, valorDeBusqueda)
});

document.addEventListener("mouseleave", noPierdasElCarrito);


const elementosConAlerta = document.getElementsByClassName("alertaCarrito");
alertaCarritoOver();




function cargarProductos() {
  fetch('../assets/js/productos.json')
    .then(response => response.json())
    .then(data => {
      productos = data

      imprimirProductos(productos)
    })
}

function imprimirProductos(listaDeProductos) {
  const shopPadre = document.getElementById("shopPadre");
  shopPadre.innerHTML = "";

  listaDeProductos.map(producto => {
    const cardProducto = crearCard(producto);

    shopPadre.appendChild(cardProducto);
  })
}

function crearCard(producto) {
  const card = document.createElement("div");
  card.classList.add("productos_shop");
  card.innerHTML = `
								<img src="${producto.fotoproducto}" class="productos_shop_img">
									  
								<div class="productos_shop_titular">
										<h3>${producto.nombre}</h3>
										<h3>$${producto.precio}</h3>
								</div>
			  
								<div class="productos_shop_descripcion">
										${producto.descripcion}
								</div>
								<div class= "cantidadshop">
									<label class="cantidad" for="numero">Cantidad:</label>
									<input id="cantidad-${producto.id}" class="cantidadinput" type="number"  name="numero" min="0" value="0">
								</div>
								`
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('botones');

  const btnAniadir = document.createElement('button')
  const btnQuitar = document.createElement('button')

  btnAniadir.classList.add('btn-shop');
  btnAniadir.id = `botonAniadir${producto.id}`;
  btnAniadir.innerText = 'Añadir al Carrito';
  btnAniadir.onclick = () => agregarAlCarrito(producto.id)

  btnQuitar.classList.add('btn-shop');
  btnQuitar.id = `botonQuitar${producto.id}`;
  btnQuitar.innerText = 'Quitar del Carrito';
  btnQuitar.onclick = () => quitarDelCarrito(producto.id)

  buttonContainer.appendChild(btnAniadir);
  buttonContainer.appendChild(btnQuitar);
  card.appendChild(buttonContainer);

  return card;
}

function agregarAlCarrito(idProducto) {
  let cantidad = parseInt(document.getElementById(`cantidad-${idProducto}`).value);
  let producto = productos.find(producto => producto.id === idProducto);

  if (cantidad <= producto.unidadesDisponibles) {
    saldo += cantidad * producto.precio;
    producto.unidadesPedidas += producto.agregado + cantidad;
    producto.unidadesDisponibles -= cantidad;

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      iconColor: '#13A883',
      title: `Agregaste ${cantidad} unidades de ${producto.nombre} a tu carrito de compras`,
      showConfirmButton: false,
      timer: 1500,
      buttonsStyling: false
    })
  } else {
    Swal.fire({
      text:`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${producto.unidadesDisponibles}.`,
      buttonsStyling: false,
    })
  }
}

function quitarDelCarrito(idProducto) {
  let cantidad = parseInt(document.getElementById(`cantidad-${idProducto}`).value);
  let producto = productos.find(producto => producto.id === idProducto);

  if (saldo <= 0) {
    Swal.fire({
      text: 'No hay productos para quitar en del carro de compras. \nSiga comprando por favor.',
      buttonsStyling: false,
    });
  } else if (cantidad > producto.unidadesPedidas) {
    Swal.fire({
      text: `Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${producto.unidadesPedidas}`,
      buttonsStyling: false,
    });
  } else {
    saldo -= cantidad * producto.precio;
    producto.unidadesPedidas += producto.agregado - cantidad,
      producto.unidadesDisponibles += cantidad;

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      iconColor: '#13A883',
      title: `Quitaste ${cantidad} unidades de Cds. Te quedan en el carrito ${producto.unidadesPedidas}`,
      showConfirmButton: false,
      timer: 1500,
      buttonsStyling: false,
    })
  }
}

function verCarrito() {
  const carrito = productos.filter(producto => producto.unidadesPedidas > 0);

  const lista = document.createElement('ul');

  carrito.forEach(producto => {
    const item = document.createElement('li');
    item.innerText = `${producto.nombre} - ${producto.unidadesPedidas} unidades`;

    lista.appendChild(item);
  })

  if (carrito.length === 0) {
    Swal.fire({
      text: "Tu Carrito esta vacio",
      buttonsStyling: false
    }
    )
  } else {
    Swal.fire({
      title: `Tenes cargados estos productos en el carrito! Tu Saldo Actual es de ${saldo}`,
      html: lista,
      focusConfirm: false,
      buttonsStyling: false
    })
  }

}

function ordenarAlfabeticamenteAsc() {
  const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  imprimirProductos(productosOrdenados)
}

function ordenarAlfabeticamenteDes() {
  const productosOrdenados = productos.sort((b, a) => a.nombre.localeCompare(b.nombre));
  imprimirProductos(productosOrdenados)
}

function ordenarNumericamenteAsc() {
  const productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
  imprimirProductos(productosOrdenados)
}

function ordenarNumericamenteDes() {
  const productosOrdenados = productos.sort((b, a) => a.precio - b.precio);
  imprimirProductos(productosOrdenados)
}

function filtrarProductos(criterio, valor) {
  const productosFiltrados = productos.filter((producto) => producto[criterio].toLowerCase().includes(valor.toLowerCase()));

  if (productosFiltrados.length === 0) {
    Swal.fire({
      title: 'No se encontrar productos coincidentes con su busqueda',
      buttonsStyling: false
    })

    imprimirProductos(productos)
  } else {
    imprimirProductos(productosFiltrados)
  }
}

function funcionConfirmarCompra() {
  if (saldo === 0) {
    Swal.fire({
      title: 'El carrito esta vacio',
      buttonsStyling: false
    })
  } else {
    (async () => {
      const { value: pago } = await Swal.fire({
        title: 'Seleccione una opción de pago',
        input: 'select',
        buttonsStyling: false,
        inputOptions: {
          'Opciones de Pago': {
            'efectivo': 'Efectivo',
            'tarjeta': 'Tarjeta de Crédito/Débito',
            'transferencia': 'Transferencia Bancaria',
            'mercadoPago': 'MercadoPago'
          },
        },
        inputPlaceholder: 'Seleccione una opción',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value) {
              resolve()
            } else {
              resolve('Debe seleccionar una opción de pago')
            }
          })
        },
      })

      if (pago) {
        Swal.fire({
          title: `Ha seleccionado: ${pago}. El importe a cancelar es de $${saldo} y se entregará en la dirección ingresada al momento del registro.`,
          showDenyButton: true,
          confirmButtonText: 'Confirmar Compra',
          denyButtonText: `Seguir Comprando`,
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: 'Tu pedido será entregado en breve!',
              buttonsStyling: false,
            })
              .then(() => { location.reload(); });

          } else if (result.isDenied) {
            Swal.fire({
              text: 'Podes seguir agregando productos al carrito!',
              buttonsStyling: false,
            })
          }
        })


      }
    })()
  }
}

function noPierdasElCarrito() {
  if (!alertaCarrito) {
    Swal.fire({
      text: "Cuidado! Al cerrar la pagina vas a perder lo que tengas en el carrito si no confirmaste la compra!",
      buttonsStyling: false,
      icon: 'warning',
      iconColor: '#13A883'
    });
    alertaCarrito = true;
  }
}

function alertaCarritoOver() {
  const elementosConAlerta = document.getElementsByClassName("alertaCarrito");
  for (let i = 0; i < elementosConAlerta.length; i++) {
    elementosConAlerta[i].addEventListener("mouseover", noPierdasElCarrito);
  }
}