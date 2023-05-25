/* let cuerpa = document.getElementsByTagName("main");
document.body(cuerpa);
console.log(cuerpa); */

let divTarjetas = document.getElementById("row cajatarjetas");
console.log(divTarjetas);

    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class","card col-md-3 mt-3 mb-3");
    divTarjetas.appendChild(tarjeta);

        let tarjetaImagen = document.createElement("img");
        tarjetaImagen.setAttribute("class","card-img-top mt-2 mb-1 border border-2 border-dark");
        tarjetaImagen.setAttribute("src","./images/g513carbon.jpg");
        tarjeta.appendChild(tarjetaImagen);

        let tarjetaTitulo = document.createElement("h5");
        tarjetaTitulo.setAttribute("class","card-title text-center");
        tarjetaTitulo.innerHTML = ('Teclado Logitech G513 Carbon<br>Código: 1');
        tarjeta.appendChild(tarjetaTitulo);

        let tarjetaParrafo = document.createElement("p");
        tarjetaParrafo.setAttribute("class","card-text text-center");
        tarjetaParrafo.innerHTML = ('G513 es un teclado para juegos de alto desempeño con interruptores mecánicos avanzados GX Brown Tactile. El reposamanos extraíble de espuma viscoelástica y la construcción de aleación de aluminio premium complementan las características de G513 para hacerlo el mejor de su clase.');
        tarjeta.appendChild(tarjetaParrafo);

        /* tarjeta.style.backgroundColor = "#4e695f"; */
        tarjeta.border = "solid #147550";

    console.log(tarjeta);

/* tarjeta.style.backgroundColor = "blue"; */
