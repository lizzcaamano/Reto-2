"use strict";

const btnimagen = document.querySelector("#imagen");
const imagen = document.querySelector("#imagen");
const tituloV= document.querySelector("#visible");
const tituloO = document.querySelector("#oculto");
let contar = 0;

const addBorder = (click) =>{
    if(click === 0){
        tituloV.classList.remove("oculto");
        tituloV.classList.add("visible");
        tituloO.classList.remove("visible");
        tituloO.classList.add("oculto");
        imagen.classList.remove("border-si");
    }else if(click === 1){
        imagen.classList.add("border-si");
        tituloV.classList.add("oculto");
        tituloV.classList.remove("visible");
        tituloO.classList.add("visible");
        tituloO.classList.remove("oculto");
    }
}

btnimagen.onclick = function(){
    if(contar === 0){
        contar = 1;
    }else if(contar === 1){
        contar = 0;
    }
    addBorder(contar)
}

