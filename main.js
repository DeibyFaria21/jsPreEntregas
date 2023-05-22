productosTeclados = [
    producto1 = {
        id: 1,
        categoria: "Teclado mecánico",
        nombre: "Teclado Logitech G513 Carbon",
        valor: 24500,
        stock: 6
    },
    producto2 = {
        id: 2,
        categoria: "Teclado mecánico",
        nombre: "Teclado HyperX Alloy Origins",
        valor: 18000,
        stock: 0
    },
    producto3 = {
        id: 3,
        categoria: "Teclado mecánico",
        nombre: "Teclado ROG Claymore II",
        valor: 37100,
        stock: 7
    },
    producto4 = {
        id: 4,
        categoria: "Teclado de membrana",
        nombre: "Teclado Corsair K55 RGB",
        valor: 19800,
        stock: 3
    },
    producto5 = {
        id: 5,
        categoria: "Teclado de membrana",
        nombre: "Teclado Redragon Shiva K512",
        valor: 16400,
        stock: 0
    },
    producto6 = {
        id: 6,
        categoria: "Teclado de membrana",
        nombre: "Teclado Sentey Acrylix RGB",
        valor: 8600,
        stock: 4
    },
]

let cardProd = document.getElementsByClassName("card");
console.log(cardProd);

let cardButton = document.createElement("button");
cardButton.innerText = "Boton"

cardProd[0].appendChild(cardButton);
cardProd[1].appendChild(cardButton);
cardProd[2].appendChild(cardButton);
cardProd[3].appendChild(cardButton);
cardProd[4].appendChild(cardButton);
cardProd[5].appendChild(cardButton);

