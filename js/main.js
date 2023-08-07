// Simulador Pre-entrega 1

let usuario = parseInt(prompt("Ingrese su codigo bancario."))

if (isNaN(usuario)){
    let userr = prompt("Ese no es un codigo valido. Vuelva a Ingresar el codigo.")
    usuarioIngreso(userr)
}else{
    alert("Hola devuelta!")
}

function usuarioIngreso(user){
    if(isNaN(user)){
    for(let i = 0; i < 2; i++){
        prompt("No ingreso un numero. Tendra que ingresarlo 2 veces mas para confirmarlo")
        }
        alert("Ingreso")
    }else{
        alert("Ingreso correctamente")
    }
}

let bienvenido = parseInt(prompt("Bienvenido al Banco DineroAsegurado. Para retirar dinero precione 1, si desea finalizar precione 2."))

switch (bienvenido) {
    case 1:
        let maquina = parseInt(prompt("Ingrese el monto a retirar. Maximo $50000"))
        retiro(maquina)
        break;
    case 2:
        alert("Finalizo la operacion.")
        break;
    default:
        alert("Opcion no valida")
        break;
}

function retiro(dinero){
    if(dinero > 50000){
        alert("Excedio el monto.")
    }else if(dinero < 0){
        alert("Numero no valido.")
    }else if(isNaN(dinero)){
        alert("No es un numero")
    }else{
        alert("Retiro el monto de" + " " + "$" + dinero + " " + "correctamente.")
    }
}