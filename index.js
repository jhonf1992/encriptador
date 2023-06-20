function encriptar (){
    let textoEntrada = document.getElementById('area-texto').value;
    let textoEncriptado = textoEntrada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById('area-texto2').value=textoEncriptado;
    document.getElementById('area-texto').value;
}
let boton1 = document.getElementById('btn1');
boton1.onclick = encriptar;

function desencriptar(){
    let textoEntrada = document.getElementById('area-texto').value;
    let textoDesencriptado = textoEntrada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('area-texto2').value =textoDesencriptado;
    document.getElementById('area-texto').value;
}
let boton2 = document.getElementById('btn2');
boton2.onclick = desencriptar;


function copiar(){
    let copiarTexto = document.getElementById('area-texto2');
    copiarTexto.select();
    copiarTexto.setSelectionRange();
    navigator.clipboard.writeText(copiarTexto.value);
}

// let boton3 = document.getElementById('btn3');
// boton3.onclick = copiar;