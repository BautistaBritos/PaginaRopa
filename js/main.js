const productos = [
    {id: 1, objeto: "Redragon TKL 60%", precio: 50000, img: "./images/teclado tkl 60%.jpg"},
    {id: 2, objeto: "Intel Core I9", precio: 70000, img: "./images/core i9.jpg"},
    {id: 3, objeto: "Intel Core I3", precio: 35000, img: "./images/core i3.jpg"},
    {id: 4, objeto: "Radeon RX550", precio: 60000, img: "./images/rx550.jpg"},
    {id: 5, objeto: "ASUS RTX 2060", precio: 100000, img: "./images/placa de video asus rtx 2060.jpg"},
    {id: 6, objeto: "Intel Core I7", precio: 80000, img: "./images/core i7.jpg"},
    {id: 7, objeto: "Ryzen 5 3400", precio: 40000, img: "./images/ryzen.jpeg"},
    {id: 8, objeto: "HyperX Alloys", precio: 6000, img: "./images/tecaldohyperex.png"},
];

const contenedor = document.querySelector("#carroMostrar")

const carrito = []

const btnComprar = document.querySelectorAll(".btnComprar")

btnComprar.forEach((button, index) => {
    button.addEventListener("click", () => {
        agregarCarrito(index);
    })
})

function agregarCarrito(index){
    event.preventDefault()
    const objeto = productos[index]
    objeto.precio = parseFloat(objeto.precio);
    carrito.push(objeto)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarro()
}

const carritoMostrar = document.getElementById("carroMostrar")

function mostrarCarro(){
    carritoMostrar.innerHTML = "";
    let total = 0;

    carrito.forEach((objeto) => {
        const precioMostrado = parseFloat(objeto.precio)
        total += precioMostrado

        const objetoDiv = document.createElement("div")
        objetoDiv.className = "objetoooo"
        objetoDiv.innerHTML = `

            <img src="${objeto.img}" alt"${objeto.nombre}">
            <p>${objeto.objeto}</p>
            <p>Precio $${precioMostrado}</p>
        `
        carritoMostrar.appendChild(objetoDiv)
    })

    carritoMostrar.innerHTML += `<p class="totall">Total: $${total}</p>`

    const btnPago = document.createElement("div")
    btnPago.className = "botonPagar"
    btnPago.innerHTML = `
        <button onClick="redirigir()">Comprar</button>
    `

    carritoMostrar.appendChild(btnPago)
}

function redirigir(){
    return window.location.href="./pages/pagar.html"
}

const btnCompraFinalizar = document.querySelector("#btnCompraFinalizar")
const ImputsPagoo = document.querySelectorAll(".imputsPago")

btnCompraFinalizar.addEventListener("click", () => {
    validarCompra(ImputsPagoo)
})

function validarCompra(el){
    if(el.value == ""){
        alert("mal")
    }else{
        alert("Compra realizada con exito.")
        localStorage.clear(carrito)
    }
}

