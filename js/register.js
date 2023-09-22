//Registro

const formRegister = document.querySelector("#formRegister"),
userReg = document.querySelector("#usuario"),
nombre = document.querySelector("#nombre"),
email = document.querySelector("#email"),
passReg = document.querySelector("#contraseña"),
btnRegistrar = document.querySelector("btnRegistrar"),
containerRegistro = document.querySelector("#containerRegistro")

let usuarios = []

class Usuario {
    constructor(nombre, usuario, email, password){
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.pass = password;   
    }
}

function guardarLocal(arr){
    return localStorage.setItem("usuarios", JSON.stringify(arr))
}

formRegister.addEventListener("submit", (e)=>{
    e.preventDefault()
    validarRegistro()
})

//Validacion registro
function validarRegistro(){
    if(userReg.value.length  >= 15){
        containerRegistro.innerHTML="El usuario debe tener 14 caracteres como maximo"
    }else if(! email.value.includes("@")){
        containerRegistro.innerHTML="Debe ser un mail."
    }else if(! isNaN(nombre.value)){
        containerRegistro.innerHTML="No puede poner numeros en el nombre."
    }else if(isNaN(passReg.value) || passReg.value.length < 8 || passReg.value.length >= 21){
        containerRegistro.innerHTML="La contrasena deben ser numeros y debe tener entre 8 y 20 caracteres."
    }else{
        const newUser = new Usuario(nombre.value, userReg.value, email.value, passReg.value)
        usuarios.push(newUser)
        guardarLocal(usuarios)
        formRegister.reset()
        containerRegistro.innerHTML="Registro exitoso."
    }
}