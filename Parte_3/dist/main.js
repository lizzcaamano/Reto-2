"use strict";

const select = document.querySelector("#select3");
const btn = document.getElementById("btnVerificar");
const padre = document.getElementById("mensajes");


    select.onclick = function(){
        const selet1 = document.getElementById("select1").value;
        const selet2 = document.getElementById("select2").value;
        const selet3 = document.getElementById("select3").value;
        const cadena = selet1 + selet2 + selet3;
        validar(cadena);
}


const validar = (cadena) =>{
    console.log(cadena);
    
if(cadena === "911"){
    const p = document.createElement("p");
    p.className = "mensaje";
    p.textContent = "Password 1 correcto";
    padre.appendChild(p);
}else if(cadena === "714"){
    const p = document.createElement("p");
    p.className = "mensaje";
    padre.appendChild(p);
}else{
    const p = document.createElement("p");
    p.className = "mensaje";
    p.textContent = "Password incorrecto";
    padre.appendChild(p);
}
}

btn.onclick = function(){
validar();
}




    
