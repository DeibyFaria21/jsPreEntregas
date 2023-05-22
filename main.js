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

let listado = document.querySelector("#listaProductos");
console.log(listado);

listado.style.textAlign = "center";



let cardProd = document.getElementsByClassName("card");
console.log(cardProd/* [0].innerHTML */);


let cardButton = document.createElement("button");
cardButton.innerText = "Boton"
console.log(typeof cardButton);

/* function agregarBoton(){
return
cardProd[2].appendChild(cardButton);
cardProd[3].appendChild(cardButton);
}
agregarBoton; */

console.log(typeof cardProd);
console.log(cardProd);


/* conclu.push(cardProd); */


/* let tarjeta1 = cardProd[2].innerHTML;
console.log(tarjeta1);
cardProd.appendChild("cardButton"); */

/* cardProd[2].appendChild(cardButton);
cardProd[3].appendChild(cardButton);
cardProd[4].appendChild(cardButton);
cardProd[5].appendChild(cardButton); */

