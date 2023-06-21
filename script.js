function encriptar(){
    var frase = document.getElementById("textoEntrada").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textoSalida").innerHTML=textoEncriptado;

    
    document.getElementById("muneco").style.display = "none";

    document.getElementById("botonCopiar").style.visibility = "visible";

    document.getElementById("avisoSalida").innerHTML="";


}
var btn = document.querySelector("#botonEncriptado");
btn.onclick = encriptar;

function desencriptar(){
    var frase = document.getElementById("textoEntrada").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");



    document.getElementById("textoSalida").innerHTML=textoEncriptado;
    document.getElementById("avisoSalida").innerHTML="";
    document.getElementById("muneco").style.display = "none";
}

var btn2 = document.querySelector("#botonDesencriptado");
btn2.onclick = desencriptar; 

function copiar(){
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand("copy");
}

var btn3 = document.querySelector("#botonCopiar");
btn3.onclick = copiar;


