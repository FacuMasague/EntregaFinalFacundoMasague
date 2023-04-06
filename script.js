let productos

let productosjson = fetch("productos.json")
    .then(function(response){return response.json()})
    .then(function(data){return productos = data})

let precio = 0
let i = 0

let carrito = []
let carritoHTML = document.getElementById("carrito")

let total = document.getElementById("total")
total.innerText = precio + "$"

let buttons = document.querySelectorAll(".button_compra")

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        let producto = productos.find(function(item){
            return item.producto === button.parentNode.parentNode.id
        })
        Toastify({
            text: producto.nombre + " añadido",
            className: "alerta",
            duration: 3000
        }) .showToast();

        precio += producto.precio
        total.innerText = precio + "$"
        
        i++
        let carritoProducto = {
            producto: producto.nombre,
            id: i
        }
        carrito.push(carritoProducto)
        console.log(carrito)

        let li = document.createElement("li")
        li.setAttribute("id", i)
        li.innerText = carrito[carrito.length - 1].producto
        carritoHTML.appendChild(li)
    })
})