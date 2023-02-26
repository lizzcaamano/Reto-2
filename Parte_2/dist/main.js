"use strict";


const btn = document.getElementById("btnllevar");


btn.onclick = function(){

    const cantS1 = parseInt(document.getElementById("sticker-1").value);
    const cantS2 = parseInt(document.getElementById("sticker-2").value);
    const cantS3 = parseInt(document.getElementById("sticker-3").value);
    const agregar = document.querySelector(".mensajes");

    let suma = parseInt(cantS1 + cantS2 + cantS3);

    
    //const mensj = document.querySelector(".mensaje");
    //console.log(h3);

    
    

    if(suma <= 10){
        const h3 = document.createElement("h3");
        console.log(agregar);
        h3.className ="mensaje-correct";
        h3.textContent = `Llevas un total de ${suma} stickers`; 
        console.log(agregar);
        agregar.appendChild(h3);
        console.log(agregar);
        
    }else if(suma >= 10){
        const h3 = document.createElement("h3");
        console.log(agregar);
        h3.className="mensaje-error";
        h3.textContent = `Llevas un total de ${suma} stickers, son demasiados. Máximo 10`;
        agregar.appendChild(h3);
        console.log(agregar);
    }
    
}

