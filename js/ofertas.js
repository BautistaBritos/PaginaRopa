//traigo los productos en oferta con fetch
fetch("../data/data.json")
.then(response=>response.json())
.then(datos=>{
    pintarHtml(datos)
})

//Los pinto
const cartasOfertas = document.querySelector("#cartasOfertas")

function pintarHtml(arr){
    cartasOfertas.innerHTML ="";

    let html1 ="";
    for (const item of arr){
        html1 = `<div class="card1">
            <img src="${item.img}" alt="" class="imagen1">
            <h3>${item.objeto}</h3>
            <p>$${item.precio}</p>
            <button onClick="redirijo()">Comprar</button>
        </div>
        `;
        cartasOfertas.innerHTML += html1;
    }
}

function redirijo(){
    Swal.fire({
        title: 'Si desea comprar, sera redirigido a la pagina principal',
        text: "Si quiere seguir viendo las ofertas, cancele",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ir a la pagina principal'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Sera redirigido',
            'Gracias por contar con nosotros',
            'success'
          )
          window.location.href="paginaPrincipal.html"
        }
      })
}