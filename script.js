const productos = [
    {producto: "desarrolloWeb", precio: 15000, nombre: "Desarrollo Web"},
    {producto: "javascript", precio: 20000, nombre: "Javascript"},
    {producto: "reactJS", precio: 22500, nombre: "ReactJS"},
    {producto: "backend", precio: 25000, nombre: "BackEnd"}
];

let precio = 0

let carrito = []
let carrito_json = JSON.stringify(carrito)

let cart = document.getElementById("carrito")

let total = document.getElementById("total")
total.innerText = precio + "$"

let buttons = document.querySelectorAll("button")

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let id = button.parentNode.parentNode.id
        let suma = productos.find(function(item) {
            return item.producto === id
        })
        precio += suma.precio

        total.innerText = precio + "$"

        carrito.push(id)
        sessionStorage.setItem("Carrito", carrito)

        let li = document.createElement("li")
        li.innerText = suma.nombre
        cart.appendChild(li)
    })
})