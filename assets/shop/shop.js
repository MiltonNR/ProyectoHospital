const musica = 10;
const vacunas = 100;
const pool= 1500;
const kitkat = 1;
const fax = 10;
const cronometro = 5;
let pass = "0";
let musicaComp = 0;
let vacunasComp = 0;
let poolComp = 0;
let kitkatComp = 0;
let faxComp = 0;
let cronometroComp = 0;
let unidadesMusica = 0;
let unidadesVacunas = 0;
let unidadesPool = 0;
let unidadesKitkat = 0;
let unidadesFax = 0;
let unidadesCrono = 0;

//Saludos
alert ("mmmh, así que venis a comprar a una pagina de un hospital imaginario?");
let userName = prompt ("Bueno, si vos insistís, ingresá tu nombre para empezar a comprar: ");
while (userName === null || userName === "" ) {
    userName = prompt ("Bueno, si vos insistís, ingresá tu nombre para empezar a comprar: "); 
}

//Login

function login () {

    let ingresar = false; 

    for (let i = 2; i>= 1; i--) {


        let userPin = prompt  ("Hola " + userName + " ahora ingresá la contraseña por favor. \n\n\n\n(la contraseña es 0 -shhh- )");
        if (userPin === pass) {
        alert ("Ingreso exitoso: Bienvenide, " + userName);
        ingresar = true;
        break;
        } else {
        alert ("Error, "+userName+". Te quedan " + (i-1) + " intento. Media pila, ya  dijimos la contraseña. Es 0.")}
        
    } 

    return ingresar;
}

if (login ()) {
        let saldo = 0;
        let direccion = prompt ("Buenos días, " + userName + " elegí una dirección en la que quisieras recibir tu pedido") 
        while (direccion === "" ) {
            direccion = prompt ("Buenos días, " + userName + " elegí una dirección en la que quisieras recibir tu pedido")  
        }
        let medioPago;
        while (true) {
          medioPago = parseInt(prompt("Y que metodo de pago vas a elegir, " + userName + "? \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
          if (medioPago >= 1 && medioPago <= 4) {
            switch (medioPago) {
              case 1:
                medioPago = "en efectivo a quien realiza la entrega. No olvides tener cambio."
                break;
              case 2:
                medioPago = "haciendo una transferencia al alias: 'hospital.inventado.shop'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
              case 3:
                medioPago = "utilizando una de tus tarjetas. Podés ingresar los datos a través de Mercado Pago. No olvides enviar el comprobante a hospitalinventado@stmary.com"
                break;
              case 4:
                medioPago = "haciendo una transferencia al alias: 'hospital.inventado.shop.mp'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
                break;
            }
            break;
          } else {
            alert("Por favor elegí una opción que esté entre el 1 y el 4.");
          }
        }

   let menuPrincipal = prompt ("Buenos días, " + userName + " elegí una opción para empezar a  comprar: \n1- Agregar Productos \n2- Quitar Productos\n3- Ver listado de productos \n4- Modificar Dirección\n5- Modificar Metodo de Pago \nPresione X para salir") 

    while (menuPrincipal != "x" && menuPrincipal != "X") {
        switch (menuPrincipal){

        case "1": 
         let   agregar = parseInt (prompt ("Ingresá el producto que queres agregar: \n1- Música Funcional de Hospital ($10) \n2- Vacunas! ($100) \n3- Pool y Esparcimiento ($1500) \n4-KitKat ($1) \n5- Fax ($10) \n6- Cronometro ($5)"))
            if (agregar >= 1 && agregar <= 6) {
            cantidad = parseInt (prompt ("Cuantas unidades querés?"));
            switch (agregar) {
                case 1:
                    saldo += cantidad * musica;
                    unidadesMusica += musicaComp + cantidad;
                    break;
                case 2:
                    saldo += cantidad * vacunas;
                    unidadesVacunas += vacunasComp + cantidad;
                    break;
                case 3:
                    saldo += cantidad * pool;
                    unidadesPool += poolComp + cantidad;
                    break;
                case 4:
                    saldo += cantidad * kitkat;
                    unidadesKitkat += kitkatComp + cantidad;
                    break;
                case 5:
                    saldo += cantidad * fax;
                    unidadesFax += faxComp + cantidad;
                    break;
                case 6:
                    saldo += cantidad * cronometro;
                    unidadesCrono += cronometroComp + cantidad;
                    break;
        }  
        } else {
            alert("Opción inválida... a ver... dice del 1 al 6...");
        }
        break;
        case "2":
            if (saldo <=0) {
             alert ("No hay productos para quitar en del carro de compras. Siga comprando en la opción 1 por favor.");
            }  else {
        let   quitar = parseInt (prompt ("Ingresá el producto que queres quitar: \n1- Música Funcional de Hospital ($10) \n2- Vacunas! ($100) \n3- Pool y Esparcimiento ($1500) \n4-KitKat ($1) \n5- Fax ($10) \n6- Cronometro ($5)"))
        if (quitar >= 1 && quitar <= 6) {
        cantidad = parseInt (prompt ("Cuantas unidades querés quitar?"));
        switch (quitar) {
            case 1:
                if (cantidad > unidadesMusica) {
                    alert("Su carrito tiene menos cantidad de la que desea quitar del pedido");
                } else {
                    saldo -= cantidad * musica;
                    unidadesMusica -= musicaComp + cantidad;
                }
                break;
            case 2:
                if (cantidad > unidadesVacunas) {
                    alert("Su carrito tiene menos cantidad de la que desea quitar del pedido");
                } else {
                    saldo -= cantidad * vacunas;
                    unidadesVacunas -= vacunasComp + cantidad;
                }
                break;
            case 3:
                if (cantidad > unidadesPool) {
                    alert("Su carrito tiene menos cantidad de la que desea quitar del pedido");
                } else {
                    saldo -= cantidad * Pool;
                    unidadesPool -= PoolComp + cantidad;
                }
                break;
            case 4:
                if (cantidad > unidadesKitkat) {
                    alert("Su carrito tiene menos cantidad de la que desea quitar del pedido");
                } else {
                    saldo -= cantidad * kitkat;
                    unidadesKitkat -= kitkatComp + cantidad;
                }
                break;
            case 5:
                if (cantidad > unidadesFax) {
                    alert("Su carrito tiene menos cantidad de la que desea quitar del pedido");
                } else {
                    saldo -= cantidad * fax;
                    unidadesFax -= faxComp + cantidad;
                }
                break;
            case 6:
                if (cantidad > unidadesCrono) {
                    alert("Su carrito tiene menos cantidad de la que desea quitar del pedido");
                } else {
                    saldo -= cantidad * cronometro;
                    unidadesCrono -= cronometroComp - cantidad;
                }
                break;
        
        }  

        } else {
        alert("Opción inválida...  a ver... dice del 1 al 6...");
        }
        }
        break;
        case "3":
            alert ("Usted lleva comprado: \n- Cds de Musica Funcional: "+unidadesMusica+".\n- Vacunas varias: "+unidadesVacunas+".\n- Pool y Espacimiento: " + unidadesPool +".\n- Kit Kats: "+ unidadesKitkat+".\n- Faxes Viejos: "+unidadesFax+".\n- Cronometros Comprados: "+unidadesCrono+ ".");
            break;
        case "4": 
        let nuevadireccion = ""
        while (nuevadireccion === "") {
        nuevadireccion = prompt ("Ingrese la nueva dirección en al que quisiera recibir el pedido"); 
        } if (direccion === nuevadireccion) {
        alert("La dirección ingresada es la misma que la actual.");
        } else {
        direccion = nuevadireccion;
        alert ("La dirección ha sido modificada correctamente")
        }
        break;        
        case "5":
            medioPago = parseInt (prompt ("Ingresá un nuevo metodo de pago: \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
            while (medioPago === "" || (medioPago < 1 && medioPago >4)){
            medioPago = parseInt (prompt ("Ingresá un nuevo metodo de pago: \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
            } if (medioPago === 1) {
                medioPago = "darle el efectivo a quien realiza la entrega. No olvides tener cambio.";
                break;
            } else if (medioPago === 2) {
                medioPago = "hacer una transferencia al alias: 'hospital.inventado.shop'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
            } else if (medioPago === 3) {
                medioPago = "utilizar una de tus tarjetas. Podés ingresar los datos a través de Mercado Pago. No olvides enviar el comprobante a hospitalinventado@stmary.com";
            } else if (medioPago === 4) {
                medioPago = "hacer una transferencia al alias: 'hospital.inventado.shop.mp'. No olvides enviar el comprobante a hospitalinventado@stmary.com";
            } else {
                medioPago = parseInt (prompt ("Por favor ingresá una opción entre 1 y 4: \n1- Efectivo Contraentrega \n2- Transferencia Bancaria\n3- Tarjeta de Crédito/Débito\n4- Mercado Pago"));
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

    menuPrincipal = prompt ("Llevas gastado $" + saldo + " para entregar en " + direccion + " y el método de pago seleccionado es " + medioPago +".\nElegí una opción para seguir comprando: \n1- Agregar Productos \n2- Quitar Productos\n3- Ver listado de Productos  \n4- Modificar Dirección\n5- Modificar Metodo de Pago\nPresioná S para confirmar la compra\nPresioná X para cancelar la compra.") ;
    if ((menuPrincipal === "S" || menuPrincipal === "s") && saldo >= 0) {
        alert ("Felicitaciones. Realizaste una compra por " + saldo + " para entregar en " + direccion + " y el método de pago seleccionado es " + medioPago + " .En los proximos días nos comunicaremos para coordinar la entrega. Spoiler: Es probable que nunca la hagamos.")
        break;
    } else if (menuPrincipal === "X" || menuPrincipal === "x") {
        alert ("Estas saliendo y cancelando tu compra!. Tu carrito quedó vacio! Te esperamos la proxima!")    
    }


}

} else {

alert ("Tu contraseña es incorrecta, si lees todos los carteles vas a ver que sólo tenías que poner un 0")


}

