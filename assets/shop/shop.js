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
const user = [
    userName= "",
    direccion="",
    medioPago="",
    saldo="",
    pedidoRealizado="",
    pin="",
]
let pass = "0";


//Saludos
alert ("mmmh, así que venis a comprar a una pagina de un hospital imaginario?");
user.userName = prompt ("Bueno, si vos insistís, ingresá tu nombre para empezar a comprar: ");
while (user.userName === null || user.userName === "" ) {
    user.userName = prompt ("Bueno, si vos insistís, ingresá tu nombre para empezar a comprar: "); 
}

//Login

function login () {

    let ingresar = false; 

    for (let i = 2; i>= 1; i--) {


        user.pin = prompt  (`Hola ${user.userName}, ahora ingresa la contraseña por favor. \n\n\n\n\n\n\n\n(La contraseña es 0 -shhh-)`);
        if (user.pin === pass) {
        alert ("Ingreso exitoso: Bienvenide, " + user.userName);
        ingresar = true;
        break;
        } else {
        alert ("Error, "+user.userName+". Te quedan " + (i-1) + " intento. Media pila, ya  dijimos la contraseña. Es 0.")}
        
    } 

    return ingresar;
}

//Elección de Nombre, dirección de entre y medio de pago.
if (login ()) {
        user.saldo = 0;
        user.direccion = prompt (`Buenos días, ${user.userName} elegí una dirección en la que quisieras recibir tu pedido:`) 
        while (user.direccion === "" ) {
            user.direccion = prompt (`Buenos días, ${user.userName} elegí una dirección en la que quisieras recibir tu pedido:`)  
        }
        user.medioPago;
        while (true) {
          user.medioPago = parseInt(prompt(`Y que metodo de pago vas a elegir, ${user.userName}? \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago`));
          if (user.medioPago >= 1 && user.medioPago <= 4) {
            switch (user.medioPago) {
              case 1:
                user.medioPago = "en efectivo a quien realiza la entrega. No olvides tener cambio."
                break;
              case 2:
                user.medioPago = "haciendo una transferencia al alias: 'hospital.inventado.shop'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
              case 3:
                user.medioPago = "utilizando una de tus tarjetas. Podés ingresar los datos a través de Mercado Pago. No olvides enviar el comprobante a hospitalinventado@stmary.com"
                break;
              case 4:
                user.medioPago = "haciendo una transferencia al alias: 'hospital.inventado.shop.mp'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
            }
            break;
          } else {
            alert("Por favor elegí una opción que esté entre el 1 y el 4.");
          }
        }

   let menuPrincipal = prompt (`Buenos días, ${user.userName} elegí una opción para empezar a  comprar: \n1- Agregar Productos \n2- Quitar Productos\n3- Buscar productos por \n4- Ver detalle de productos comprados \n5- Modificar Dirección\n6- Modificar Metodo de Pago \nPresione X para salir`) 

    while (menuPrincipal != "x" && menuPrincipal != "X") {
        switch (menuPrincipal){

        case "1": //Agregar productos
         let   agregar = parseInt (prompt ("Ingresá el producto que queres agregar: \n1- Música Funcional de Hospital ($10) \n2- Vacunas! ($100) \n3- Pool y Esparcimiento ($10000) \n4- KitKat ($1.50) \n5- Fax ($10) \n6- Cronometro ($5)"))
            if (agregar >= 1 && agregar <= 6) {
            cantidad = parseInt (prompt ("Cuantas unidades querés?"));
            switch (agregar) {
                case 1:
                    if (cantidad <= productos[0].unidadesDisponibles){
                    user.saldo += cantidad * productos[0].precio;
                    productos[0].unidadesPedidas += productos[0].agregado + cantidad;
                    productos[0].unidadesDisponibles -= cantidad;
                } else {
                    alert (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[0].unidadesDisponibles} Cd de Música diponibles para vender.`) 
                }
                    break;
                case 2:
                    if (cantidad <= productos[1].unidadesDisponibles){
                        user.saldo += cantidad * productos[1].precio;
                        productos[1].unidadesPedidas += productos[1].agregado + cantidad;
                        productos[1].unidadesDisponibles -= cantidad;
                    } else {
                        alert (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[1].unidadesDisponibles}  vacunas diponibles para vender.`) 
                    }
                        break;
                case 3:
                    if (cantidad <= productos[2].unidadesDisponibles){
                        user.saldo += cantidad * productos[2].precio;
                        productos[2].unidadesPedidas += productos[2].agregado + cantidad;
                        productos[2].unidadesDisponibles -= cantidad;
                    } else {
                        alert (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[2].unidadesDisponibles} diponibles para vender. Era el que teníamos en la sala de recreaciones.`) 
                    }
                        break;
                case 4:
                    if (cantidad <= productos[3].unidadesDisponibles){
                        user.saldo += cantidad * productos[3].precio;
                        productos[3].unidadesPedidas += productos[3].agregado + cantidad;
                        productos[3].unidadesDisponibles -= cantidad;
                    } else {
                        alert(`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[3].unidadesDisponibles} de Kit Kats diponibles para vender.`) 
                    }
                        break;
                case 5:
                    if (cantidad <= productos[4].unidadesDisponibles){
                        user.saldo += cantidad * productos[4].precio;
                        productos[4].unidadesPedidas += productos[4].agregado + cantidad;
                        productos[4].unidadesDisponibles -= cantidad;
                    } else {
                        alert (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[4].unidadesDisponibles} faxes para vender diponibles para vender. Eran los que usaban nuestros administrativos.`) 
                    }
                        break;
                case 6:
                    if (cantidad <= productos[5].unidadesDisponibles){
                        user.saldo += cantidad * productos[5].precio;
                        productos[5].unidadesPedidas += productos[5].agregado + cantidad;
                        productos[5].unidadesDisponibles -= cantidad;
                    } else {
                        alert (`Perdón, pero no tenemos tantas unidades en stock. En este momento hay ${productos[5].unidadesDisponibles} de cronometros diponibles para vender.`) 
                    }
                        break;
        }  
        } else {
            alert("Opción inválida... a ver... dice del 1 al 6...");
        }
        break;
        case "2": //Quitar productos del pedido.
            if (user.saldo <=0) {
             alert ("No hay productos para quitar en del carro de compras. Siga comprando en la opción 1 por favor.");
            }  else {
        let   quitar = parseInt (prompt ("Ingresá el producto que queres quitar: \n1- Música Funcional de Hospital ($10) \n2- Vacunas! ($100) \n3- Pool y Esparcimiento ($10000) \n4- KitKat ($1.50) \n5- Fax ($10) \n6- Cronometro ($5)"))
        if (quitar >= 1 && quitar <= 6) {
        cantidad = parseInt (prompt ("Cuantas unidades querés quitar?"));
        switch (quitar) {
            case 1:
                if (cantidad > productos[0].unidadesPedidas) {
                    alert(`Su carrito tiene menos cantidad de la que desea quitar del pedido. \n\n\n\n\nPedidos actualmente: ${productos[0].unidadesPedidas}`);
                } else {
                    user.saldo -= cantidad * productos[0].precio;
                    productos[0].unidadesPedidas += productos[0].agregado - cantidad,
                    productos[0].unidadesDisponibles += cantidad;
                    
                }
                break;
            case 2:
                if (cantidad > productos[1].unidadesPedidas) {
                    alert(`Su carrito tiene menos cantidad de la que desea quitar del pedido. \n\n\n\n\nPedidos actualmente: ${productos[1].unidadesPedidas}`);
                } else {
                    user.saldo -= cantidad * productos[1].precio;
                    productos[1].unidadesPedidas += productos[1].agregado - cantidad,
                    productos[1].unidadesDisponibles += cantidad;
                    
                }
                break;
            case 3:
                if (cantidad > productos[2].unidadesPedidas) {
                    alert(`Su carrito tiene menos cantidad de la que desea quitar del pedido. \n\n\n\n\nPedidos actualmente: ${productos[2].unidadesPedidas}`);
                } else {
                    user.saldo -= cantidad * productos[2].precio;
                    productos[2].unidadesPedidas += productos[2].agregado - cantidad,
                    productos[2].unidadesDisponibles += cantidad;
                    
                }
                break;
            case 4:
                if (cantidad > productos[3].unidadesPedidas) {
                    alert(`Su carrito tiene menos cantidad de la que desea quitar del pedido. \n\n\n\n\nPedidos actualmente: ${productos[3].unidadesPedidas}`);
                } else {
                    user.saldo -= cantidad * productos[3].precio;
                    productos[3].unidadesPedidas += productos[3].agregado - cantidad,
                    productos[3].unidadesDisponibles += cantidad;
                    
                }
                break;
            case 5:
                if (cantidad > productos[4].unidadesPedidas) {
                    alert(`Su carrito tiene menos cantidad de la que desea quitar del pedido. \n\n\n\n\nPedidos actualmente: ${productos[4].unidadesPedidas}`);
                } else {
                    user.saldo -= cantidad * productos[4].precio;
                    productos[4].unidadesPedidas += productos[4].agregado - cantidad,
                    productos[4].unidadesDisponibles += cantidad;
                    
                }
                break;
            case 6:
                if (cantidad > productos[5].unidadesPedidas) {
                    alert(`Su carrito tiene menos cantidad de la que desea quitar del pedido. \n\n\n\n\nPedidos actualmente: ${productos[5].unidadesPedidas}`);
                } else {
                    user.saldo -= cantidad * productos[5].precio;
                    productos[5].unidadesPedidas += productos[5].agregado - cantidad,
                    productos[5].unidadesDisponibles += cantidad;
                    
                }
                break;
        
        }  

        } else {
        alert("Opción inválida...  a ver... dice del 1 al 6...");
        }
        }
        break;
        case "3": //Buscar productos por nombre o descripción 
        let busqueda = prompt("Ingrese el nombre o descripción del producto que desea buscar (en minuscula y sin tildes, por favor):");
        let encontrado = false;
    
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre.toLowerCase().includes(busqueda.toLowerCase()) || productos[i].descripcion.toLowerCase().includes(busqueda.toLowerCase())) {
                alert(`Producto encontrado: ${productos[i].nombre} - ${productos[i].descripcion} - Precio: $${productos[i].precio} - Unidades disponibles: ${productos[i].unidadesDisponibles}, ¿Cúantas unidades desea agregar a su pedido?`);
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            alert("No se encontraron productos que coincidan con la búsqueda.");
        }
        break;
        case "4": //Mostrar el pedido
            let mensaje = "Usted lleva comprado:";
            if (productos[0].unidadesPedidas > 0) {
                mensaje += `\n- Cds de Musica Funcional: ${productos[0].unidadesPedidas}.`;
            }
            if (productos[1].unidadesPedidas > 0) {
                mensaje += `\n- Vacunas varias: ${productos[1].unidadesPedidas}.`;
            }
            if (productos[2].unidadesPedidas > 0) {
                mensaje += `\n- Pool y Espacimiento: ${productos[2].unidadesPedidas}.`;
            }
            if (productos[3].unidadesPedidas > 0) {
                mensaje += `\n- Kit Kats: ${productos[3].unidadesPedidas}.`;
            }
            if (productos[4].unidadesPedidas > 0) {
                mensaje += `\n- Faxes Viejos: ${productos[4].unidadesPedidas}.`;
            }
            if (productos[5].unidadesPedidas > 0) {
                mensaje += `\n- Cronometros Comprados: ${productos[5].unidadesPedidas}.`;
            }
            alert(mensaje);        
            break;
        case "5": 
        let nuevadireccion = ""
        while (nuevadireccion === "") {
        nuevadireccion = prompt ("Ingrese la nueva dirección en al que quisiera recibir el pedido"); 
        } if (user.direccion === nuevadireccion) {
        alert("La dirección ingresada es la misma que la actual.");
        } else {
        user.direccion = nuevadireccion;
        alert ("La dirección ha sido modificada correctamente")
        }
        break;        
        case "6":
            user.medioPago = parseInt (prompt ("Ingresá un nuevo metodo de pago: \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
            while (user.medioPago === "" || (user.medioPago < 1 || user.medioPago >4)){
                user.medioPago = parseInt (prompt ("Ingresá un nuevo metodo de pago: \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
            } if (user.medioPago === 1) {
                user.medioPago = "darle el efectivo a quien realiza la entrega. No olvides tener cambio.";
                break;
            } else if (user.medioPago === 2) {
                user.medioPago = "hacer una transferencia al alias: 'hospital.inventado.shop'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
            } else if (user.medioPago === 3) {
                user.medioPago = "utilizar una de tus tarjetas. Podés ingresar los datos a través de Mercado Pago. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
            } else if (user.medioPago === 4) {
                user.medioPago = "hacer una transferencia al alias: 'hospital.inventado.shop.mp'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
            } else {
                user.medioPago = parseInt (prompt ("Por favor ingresá una opción entre 1 y 4: \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
            }
            break;
             /*switch (medioPago) {
                case 1:
                    medioPago = "darle el efectivo a quien realiza la entrega. No olvides tener cambio."
                    break;
                    case 2:
                    medioPago = "hacer una transferencia al alias: 'hospital.inventado.shop'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                    break;
                    case 3:
                    medioPago = "utilizar una de tus tarjetas. Podés ingresar los datos a través de Mercado Pago. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                    break;
                    case 4:
                    medioPago = "hacer una transferencia al alias: 'hospital.inventado.shop.mp'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                    break;
            }*/

    default:
            alert ("elegiste una opción invalida");
    }

    menuPrincipal = prompt (`Llevas gastado $${user.saldo} para entregar en ${user.direccion} y el método de pago seleccionado es ${user.medioPago}.\nElegí una opción para seguir comprando: \n1- Agregar Productos \n2- Quitar Productos\n3- Buscar productos por \n4- Ver detalle de productos comprados \n5- Modificar Dirección\n6- Modificar Metodo de Pago\nPresioná S para confirmar la compra\nPresioná X para cancelar la compra.`) ;
    if ((menuPrincipal === "S" || menuPrincipal === "s") && user.saldo >= 0) {
        alert (`Felicitaciones. Realizaste una compra por $${user.saldo} para entregar en ${user.direccion} y el método de pago seleccionado es ${user.medioPago} .En los proximos días nos comunicaremos para coordinar la entrega. Spoiler: Es probable que nunca la hagamos.`)
        break;
    } else if (menuPrincipal === "X" || menuPrincipal === "x") {
        alert ("Estas saliendo y cancelando tu compra!. Tu carrito quedó vacio! Te esperamos la proxima!")    
    }


}

} else {

alert ("Tu contraseña es incorrecta, si lees todos los carteles vas a ver que sólo tenías que poner un 0")


}