const teclados = [
    {id: 1, objeto: "redragon kumara K552", precio: 5000},
    {id: 2, objeto: "redragon yama", precio: 7000},
    {id: 3, objeto: "redragon mitra", precio: 6000},
    {id: 4, objeto: "hyperX alloy", precio: 8000},
    {id: 5, objeto: "hyperX TKL", precio: 10000},
];

const mouses = [
    {id: 6, objeto: "redragon M719", precio: 4000},
    {id: 7, objeto: "redragon M998", precio: 7000},
];

const carro = [];

const productos = [
    {name: "teclados", productos: teclados},
    {name: "mouses", productos: mouses},
];

let init = parseInt(prompt("Bienvenidos a VentasGamers. Para comprar precione 1, si desea retirarse precione cualquier otro caracter"))

if(init == 1){
    while (true) {
        let inicio = parseInt(prompt("Bienvenidos a VentasGamers. Que desea llevar?" + " \n1- Teclados \n 2- Mouses \n 0- Salir de la compra"))

        if(inicio === 0){
            break;
        }

        if (inicio < 0){
            alert("El numero que ingresaste es menor a 0")
        }else if(!isNaN(inicio)){
            let categoria = productos[inicio - 1]

            if (categoria) {
                let lista= " "
                categoria.productos.forEach((elemento, index) => {
                    const recorrido = index + 1;
                    lista += recorrido + ". " + elemento.objeto + " $" + elemento.precio + "\n"
                })

                let opciones = parseInt(prompt("Seleccione el numero del producto que desee agregar a su carro." + "\n" + lista))

                if(opciones >= 1 && opciones <= categoria.productos.length){
                    carro.push(categoria.productos[opciones - 1])
                }else{
                    alert("Usted selecciono una opcion invalida.")
                }
            }else{
                alert("Categoria no valida.")
            }
        }else{
            alert("Solo puede seleccionar entre el 1 y el 2.")
        }

    
    }
}else{
    alert("Gracias por su atencion.")
}

alert("usted ha comprado" + carro) 
