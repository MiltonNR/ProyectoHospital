// Carrito
/// SESSIONSTORAGE
//// lista de productos
//// cantidad de productos
//// precio total
/// FUNCIONES
//// agregar producto
////// existe? +1 a la cantidad || crear producto en carrito
//// eliminar producto
//// vaciar carrito
//// calcular precio total
//// mostrar carrito (sweet alert?)
//// imprimir lista de productos (cards)
////// si producto existe en carrito, hacer algo

const productos = [
    { nombre: "Música Funcional de Hospital", 
      descripcion: "¿La espera lo dejó moviendo la cabeza? ¿Sigue pensando en ese solo de guitarra? ¡Ahora puede volver a cada disfrutando el sonido que lo dejó sano!", 
      precio: 10,
      unidadesDisponibles: 1000,
      agregado: 0,
      unidadesPedidas: 0,
    },
    { nombre: "Vacunas", 
      descripcion: "¿Tiene su calendario de vacunación al día? ¿Y sus hijos? ¿Y sus perros? Vengan que hay vacunas para todos. Alguien será vacunado", 
      precio: 100,
      unidadesDisponibles: 38212,
      agregado: 0,
      unidadesPedidas: 0,
    },
    { nombre: "Pool y esparcimiento", 
    descripcion: "Sí, tenemos un pool y esta a la venta. La tele va de regalo (Ya nos compramos un 4k)", 
    precio: 10000,
    unidadesDisponibles: 1,
    agregado: 0,
    unidadesPedidas: 0,
    },
    { nombre: "KitKat", 
    descripcion: "Y sí, es totalmente logico que un hospital venda chips no recomendado para diabeticos, niños y enfermos en general. Bueno... tampoco deberían consumirlos los sanos.", 
    precio: parseFloat (1.5),
    unidadesDisponibles: 1000000,
    agregado: 0,
    unidadesPedidas: 0,
    },
    { nombre: "Fax", 
    descripcion: "Moderna Maquina de comunicación. Imagine que tiene que mandar una imagen. ¿Cómo lo resuelve? ¡Correcto! Por fax", 
    precio: 10,
    unidadesDisponibles: 8,
    agregado: 0,
    unidadesPedidas: 0,
    },
    { nombre: "Cronometro", 
    descripcion: "Con nuestro cronometro oficial usted prodrá demostrarnos todo el tiempo que lo tuvimos en sala de espera", 
    precio: 5,
    unidadesDisponibles: 351156,
    agregado: 0,
    unidadesPedidas: 0,
    },
]
let saldo = 0;



const btnAniadirMusica = document.getElementById('aniadirMusica');
const btnQuitarMusica = document.getElementById('quitarMusica');
const btnAniadirVacunas = document.getElementById('aniadirVacunas');
const btnQuitarVacunas = document.getElementById('quitarVacunas');
const btnAniadirPool = document.getElementById('aniadirPool');
const btnQuitarPool = document.getElementById('quitarPool');
const btnAniadirKk = document.getElementById('aniadirKk');
const btnQuitarKk = document.getElementById('quitarKk');
const btnAniadirFax = document.getElementById('aniadirFax');
const btnQuitarFax = document.getElementById('quitarFax');
const btnAniadirCronometro = document.getElementById('aniadirCronometro');
const btnQuitarCronometro = document.getElementById('quitarCronometro');
const btnVerCarrito = document.getElementById('verCarrito')
const btnConfirmarCompra = document.getElementById('btnConfirmar')


btnAniadirMusica.onclick = funcionAgregarMusica;
btnAniadirVacunas.onclick = funcionAgregarVacunas;
btnAniadirPool.onclick = funcionAgregarPool;
btnAniadirKk.onclick = funcionAgregarKk;
btnAniadirFax.onclick = funcionAgregarFax;
btnAniadirCronometro.onclick = funcionAgregarCronometro;
btnQuitarMusica.onclick = funcionQuitarMusica;
btnQuitarVacunas.onclick = funcionQuitarVacunas;
btnQuitarPool.onclick = funcionQuitarPool;
btnQuitarKk.onclick = funcionQuitarKk;
btnQuitarFax.onclick = funcionQuitarFax;
btnQuitarCronometro.onclick = funcionQuitarCronometro;
btnVerCarrito.onclick = funcionVerCarrito;
btnConfirmarCompra.onclick = funcionConfirmarCompra;


  
//Funciones del Carrito
function funcionAgregarMusica() {
    let cantidadMusica = parseInt(document.getElementById("cantidadMusica").value);
    if (cantidadMusica <= productos[0].unidadesDisponibles){
        saldo += cantidadMusica * productos[0].precio;
        productos[0].unidadesPedidas += productos[0].agregado + cantidadMusica;
        productos[0].unidadesDisponibles -= cantidadMusica;
           
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Agregaste ${cantidadMusica} unidades de Cds a tu carrito de compras`,
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[0].unidadesDisponibles} Cd de Música diponibles para vender.`) 
    }    
}

function funcionAgregarVacunas() {
    let cantidadVacunas = parseInt(document.getElementById("cantidadVacunas").value);
    if (cantidadVacunas <= productos[1].unidadesDisponibles){
        saldo += cantidadVacunas * productos[1].precio;
        productos[1].unidadesPedidas += productos[1].agregado + cantidadVacunas;
        productos[1].unidadesDisponibles -= cantidadVacunas;
                   
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Agregaste ${cantidadVacunas} unidades de vacunas a tu carrito de compras`,
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[1].unidadesDisponibles} de Vacunas diponibles para vender.`) 
    }    
}

function funcionAgregarPool() {
    let cantidadPool = parseInt(document.getElementById("cantidadPool").value);
    if (cantidadPool <= productos[2].unidadesDisponibles){
        saldo += cantidadPool * productos[2].precio;
        productos[2].unidadesPedidas += productos[2].agregado + cantidadPool;
        productos[2].unidadesDisponibles -= cantidadPool;
           
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Agregaste ${cantidadPool} pool a tu carrito de compras`,
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[2].unidadesDisponibles} diponibles para vender. Era el que teníamos en la sala de recreaciones.`) 
    }    
}

function funcionAgregarKk() {
    let cantidadKk = parseFloat(document.getElementById("cantidadKk").value);
    if (cantidadKk <= productos[3].unidadesDisponibles){
        saldo += cantidadKk * productos[3].precio;
        productos[3].unidadesPedidas += productos[3].agregado + cantidadKk;
        productos[3].unidadesDisponibles -= cantidadKk;
        
           
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Agregaste ${cantidadKk} unidades de Kit Kats a tu carrito de compras`,
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[3].unidadesDisponibles} diponibles para vender.`) 
    }    
}

function funcionAgregarFax() {
    let cantidadFax = parseInt(document.getElementById("cantidadFax").value);
    if (cantidadFax <= productos[4].unidadesDisponibles){
        saldo += cantidadFax * productos[4].precio;
        productos[4].unidadesPedidas += productos[4].agregado + cantidadFax;
        productos[4].unidadesDisponibles -= cantidadFax;
       
           
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Agregaste ${cantidadFax} unidades de faxes a tu carrito de compras`,
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[4].unidadesDisponibles} diponibles para vender. Era el que teníamos en la sala de recreaciones.`) 
    }    
}

function funcionAgregarCronometro() {
    let cantidadCronometro = parseInt(document.getElementById("cantidadCronometro").value);
    if (cantidadCronometro <= productos[5].unidadesDisponibles){
        saldo += cantidadCronometro * productos[5].precio;
        productos[5].unidadesPedidas += productos[5].agregado + cantidadCronometro;
        productos[5].unidadesDisponibles -= cantidadCronometro;
        
           
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Agregaste ${cantidadCronometro} unidades de vacunas a tu carrito de compras`,
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[5].unidadesDisponibles} diponibles para vender. Era el que teníamos en la sala de recreaciones.`) 
    }    
}

function funcionQuitarMusica() {
    let cantidadMusica = parseInt(document.getElementById("cantidadMusica").value)
    if (saldo <=0) {
        Swal.fire ('No hay productos para quitar en del carro de compras. \nSiga comprando por favor.');
       }  else if (cantidadMusica > productos[0].unidadesPedidas) {
        Swal.fire (`Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${productos[0].unidadesPedidas}`);
    } else {
        saldo -= cantidadMusica * productos[0].precio;
        productos[0].unidadesPedidas += productos[0].agregado - cantidadMusica,
        productos[0].unidadesDisponibles += cantidadMusica;
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Quitaste ${cantidadMusica} unidades de Cds. Te quedan en el carrito ${productos[0].unidadesPedidas}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function funcionQuitarVacunas() {
    let cantidadVacunas = parseInt(document.getElementById("cantidadVacunas").value)
    if (saldo <=0) {
        Swal.fire ('No hay productos para quitar en del carro de compras. \nSiga comprando por favor.');
       }  else if (cantidadVacunas > productos[1].unidadesPedidas) {
        Swal.fire (`Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${productos[1].unidadesPedidas}`);
    } else {
        saldo -= cantidadVacunas * productos[1].precio;
        productos[1].unidadesPedidas += productos[1].agregado - cantidadVacunas,
        productos[1].unidadesDisponibles += cantidadVacunas;
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Quitaste ${cantidadVacunas} unidades de vacunas. Te quedan en el carrito ${productos[1].unidadesPedidas}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function funcionQuitarPool() {
    let cantidadPool = parseInt(document.getElementById("cantidadPool").value)
    if (saldo <=0) {
        Swal.fire ('No hay productos para quitar en del carro de compras. \nSiga comprando por favor.');
       }  else if (cantidadPool > productos[2].unidadesPedidas) {
        Swal.fire (`Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${productos[2].unidadesPedidas}`);
    } else {
        saldo -= cantidadPool * productos[2].precio;
        productos[2].unidadesPedidas += productos[2].agregado - cantidadPool,
        productos[2].unidadesDisponibles += cantidadPool;
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Quitaste ${cantidadPool} unidad de Pool del Carrito. Te quedan en el carrito ${productos[2].unidadesPedidas}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function funcionQuitarKk() {
    let cantidadKk = parseFloat(document.getElementById("cantidadKk").value)
    if (saldo <=0) {
        Swal.fire ('No hay productos para quitar en del carro de compras. \nSiga comprando por favor.');
       }  else if (cantidadKk > productos[3].unidadesPedidas) {
        Swal.fire (`Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${productos[3].unidadesPedidas}`);
    } else {
        saldo -= cantidadKk * productos[3].precio;
        productos[3].unidadesPedidas += productos[3].agregado - cantidadKk,
        productos[3].unidadesDisponibles += cantidadKk;
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Quitaste ${cantidadKk} unidad de Kit Kats del pedido. Te quedan en el carrito ${productos[3].unidadesPedidas} unidades.`,
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function funcionQuitarFax() {
    let cantidadFax = parseFloat(document.getElementById("cantidadFax").value)
    if (saldo <=0) {
        Swal.fire ('No hay productos para quitar en del carro de compras. \nSiga comprando por favor.');
       }  else if (cantidadFax > productos[4].unidadesPedidas) {
        Swal.fire (`Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${productos[4].unidadesPedidas}`);
    } else {
        saldo -= cantidadFax * productos[4].precio;
        productos[4].unidadesPedidas += productos[4].agregado - cantidadFax,
        productos[4].unidadesDisponibles += cantidadFax;
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Quitaste ${cantidadFax} unidad de Kit Kats del pedido. Te quedan en el carrito ${productos[4].unidadesPedidas} unidades.`,
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function funcionQuitarCronometro() {
    let cantidadCronometro = parseFloat(document.getElementById("cantidadCronometro").value)
    if (saldo <=0) {
        Swal.fire ('No hay productos para quitar en del carro de compras. \nSiga comprando por favor.');
       }  else if (cantidadCronometro > productos[5].unidadesPedidas) {
        Swal.fire (`Su carrito tiene menos cantidad de la que desea quitar del pedido. Pedidos actualmente: ${productos[5].unidadesPedidas}`);
    } else {
        saldo -= cantidadCronometro * productos[5].precio;
        productos[5].unidadesPedidas += productos[5].agregado - cantidadCronometro,
        productos[5].unidadesDisponibles += cantidadCronometro;
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'#13A883',
            title: `Quitaste ${cantidadCronometro} unidad de Kit Kats del pedido. Te quedan en el carrito ${productos[5].unidadesPedidas} unidades.`,
            showConfirmButton: false,
            timer: 1500
          })
    }
}

function funcionVerCarrito() {

    let mensaje = `Llevas gastado $${saldo} del siguiente detalle de mercadería:<br><br><br>`;
            if (productos[0].unidadesPedidas > 0) {
                mensaje += `- Cds de Musica Funcional: ${productos[0].unidadesPedidas}.<br>`;
            }
            if (productos[1].unidadesPedidas > 0) {
                mensaje += `- Vacunas varias: ${productos[1].unidadesPedidas}.<br>`;
            }
            if (productos[2].unidadesPedidas > 0) {
                mensaje += `- Pool y Espacimiento: ${productos[2].unidadesPedidas}.<br>`;
            }
            if (productos[3].unidadesPedidas > 0) {
                mensaje += `- Kit Kats: ${productos[3].unidadesPedidas}.<br>`;
            }
            if (productos[4].unidadesPedidas > 0) {
                mensaje += `- Faxes Viejos: ${productos[4].unidadesPedidas}.<br>`;
            }
            if (productos[5].unidadesPedidas > 0) {
                mensaje += `- Cronometros Comprados: ${productos[5].unidadesPedidas}.<br>`;
            }

    if (saldo === 0) {
        Swal.fire({
            title: 'El carrito esta vacio',
                        
          })
    } else {
            Swal.fire({
                title: 'Lista de Pedidos',
                html: mensaje,
              })
    }
}

function funcionConfirmarCompra(){
    if (saldo === 0) {
      Swal.fire({
        title: 'El carrito esta vacio',
      })
    } else {
      (async () => {
        const { value: pago } = await Swal.fire({
          title: 'Seleccione una opción de pago',
          input: 'select',
          inputOptions: {
            'Opciones de Pago': {
              'efectivo': 'Efectivo',
              'tarjeta': 'Tarjeta de Crédito/Débito',
              'transferencia': 'Transferencia Bancaria',
              'mercadoPago': 'MercadoPago'
            }
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
                title: `Ha seleccionado: ${pago}. El importe a cancelar es de ${saldo} y se entregará en la dirección registrada por el usuario.`,
                showDenyButton: true,
                confirmButtonText: 'Confirmar Compra',
                denyButtonText: `Seguir Comprando`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Tu pedido será entregado en breve!')
                    .then(() => {location.reload();});
                } else if (result.isDenied) {
                  Swal.fire('Podes seguir agregando productos al carrito!')
                }
              })

          
        }
      })()
    }
}

