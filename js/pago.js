//Logica pagina pagar

const btnCompraFinalizar = document.querySelector("#btnCompraFinalizar")
const ImputsPagoo = document.querySelector(".imputsPago")
const conteiner = document.querySelector(".conteiner")
const formularioTajeta = document.querySelector(".formularioTajeta")
const imputsPago1 = document.querySelector(".imputsPago1")
const imputsPago2 = document.querySelector(".imputsPago2")

formularioTajeta.addEventListener("submit", (e)=>{
    e.preventDefault()
    validar()
    formularioTajeta.reset()
})

function validar(){
    if(isNaN(ImputsPagoo.value)){
        conteiner.innerHTML="Complete con los datos correspondientes por favor."
    }else if (isNaN(imputsPago1.value)){
        conteiner.innerHTML="Complete con los datos correspondientes por favor."
    }else if (isNaN(imputsPago2.value)){
        conteiner.innerHTML="Complete con los datos correspondientes por favor."
    }else{
        Swal.fire({
            title: 'Estas seguro que deseas confirmar la compra?',
            text: "No podras revertila!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Compra realizada!',
                'Gracias por contar con nosotros.',
                'success'
              )
            }
          })
    }    
}

const btnMostrarPagar = document.querySelector("#btnMostrarPagar")
const containerPagar = document.querySelector("#containerPagar")

btnMostrarPagar.addEventListener("click", ()=>{
    mostrarCarro2()
})

function mostrarCarro2(){
    let carro = JSON.parse(localStorage.getItem("carrito"))

    if(carro.length <= 0){
        containerPagar.innerHTML="Carrito vacio"
    }else{
    containerPagar.innerHTML = "";
    let total = 0;
    
    carro.forEach((objeto) => {
        const precioMostrado = parseFloat(objeto.precio)
        total += precioMostrado

        const objetoDiv = document.createElement("div")
        objetoDiv.className = "objPa"
        objetoDiv.innerHTML = `

            <img src="${objeto.img}" alt"${objeto.nombre}">
            <p>$${objeto.objeto}</p>
            <p>Precio $${precioMostrado}</p>
        `
        containerPagar.appendChild(objetoDiv)
    })

    containerPagar.innerHTML += `<p class="totall">Total: $${total}</p>`
}
}