//Saludo
let nombreIngresado = prompt("Ingrese su nombre ");
alert("Bienvenid@ " + nombreIngresado);


//Arrays y objetos
const coin = "ARS";

productos = [
    producto1 = {
        id: 1,
        categoria: "Teclado mecánico",
        nombre: "Teclado Logitech G513 Carbon",
        valor: 24500
    },
    producto2 = {
        id: 2,
        categoria: "Teclado mecánico",
        nombre: "Teclado HyperX Alloy Origins",
        valor: 18000
    },
    producto3 = {
        id: 3,
        categoria: "Teclado mecánico",
        nombre: "Teclado ROG Claymore II",
        valor: 37100
    },
    producto4 = {
        id: 4,
        categoria: "Teclado de membrana",
        nombre: "Teclado Corsair K55 RGB",
        valor: 19800
    },
    producto5 = {
        id: 5,
        categoria: "Teclado de membrana",
        nombre: "Teclado Redragon Shiva K512",
        valor: 16400
    },
    producto6 = {
        id: 6,
        categoria: "Teclado de membrana",
        nombre: "Teclado Sentey Acrylix RGB",
        valor: 8600},
]


//Ciclo con condicional
for (let i = 1; i <= 7; i++) {
    let consultarProducto = prompt("Desea conocer el precio de uno de nuestros productos?");
    if (consultarProducto == "si"){
        let productoConsultado = prompt("Cual es el código del producto del que desea conocer el precio?\n\nCódigo: 1 - Teclado Logitech G513 Carbon\nCódigo: 2 - Teclado HyperX Alloy Origins\nCódigo: 3 - Teclado ROG Claymore II\nCódigo: 4 - Teclado Corsair K55 RGB\nCódigo: 5 - Teclado Redragon Shiva K512\nCódigo: 6 - Teclado Sentey Acrylix RGB");
        if (productoConsultado == 1) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto1.valor + " " + coin);
        } else if (productoConsultado == 2) {
            alert("El costo del producto sin IVA sería: " + codigo2 + " " + coin);
        } else if (productoConsultado == 3) {
            alert("El costo del producto sin IVA sería: " + codigo3 + " " + coin);
        } else if (productoConsultado == 4) {
            alert("El costo del producto sin IVA sería: " + codigo4 + " " + coin);
        } else if (productoConsultado == 5) {
            alert("El costo del producto sin IVA sería: " + codigo5 + " " + coin);
        } else if (productoConsultado == 6) {
            alert("El costo del producto sin IVA sería: " + codigo6 + " " + coin);
        } else {
            alert("El código ingresado no corresponde con un producto en stock...");
        }
    } else if (consultarProducto == "no"){
        alert("Puede continuar para conocer el costo total a abonar...");
    }
    if (consultarProducto == "no") break;
}