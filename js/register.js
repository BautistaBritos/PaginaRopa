//Registro

const formRegister = document.querySelector("#formRegister"),
userReg = document.querySelector("#usuario"),
nombre = document.querySelector("#nombre"),
email = document.querySelector("#email"),
passReg = document.querySelector("#contraseña"),
btnRegistrar = document.querySelector("btnRegistrar")

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
    e.preventDefault
    const newUser = new Usuario(nombre.value, userReg.value, email.value, passReg.value)
    usuarios.push(newUser)
    guardarLocal(usuarios)
    formRegister.reset()
})