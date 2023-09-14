//Inicio de Sesion

const formLogin = document.querySelector("#formLogin"),
usuarioLogin = document.querySelector("#usuarioLogin"),
passLogin = document.querySelector("#contraseñaLogin"),
parr = document.querySelector("#parr")

function inicioSesion(usuarios){
    let userFound = usuarios.find((usuario) => {
        return usuario.nombre == usuarioLogin.value && usuario.pass == passLogin.value
    })
    if(userFound){
        window.location.href="pages/paginaPrincipal.html"
    }else{
        parr.innerHTML="Usuario no encontrado"
    }
}

function recuperarLS(){
    return JSON.parse(localStorage.getItem("usuarios"))
}

const usersLS = recuperarLS();

formLogin.addEventListener("submit", (e)=> {
    e.preventDefault()
    inicioSesion(usersLS)
})
