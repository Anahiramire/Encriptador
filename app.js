
let textoInicial=document.getElementById("texto").value;
let condicion=1;

function limpiarIngreseTexto(){
    document.getElementById("texto").value="";
}

function textoOriginal(){
texto=document.getElementById("texto").value;
console.log(texto);
let mayusculas=/[A-Z]/.test(texto);
let caracteresEspeciales=/[^a-z0-9\s]/.test(texto);

 if (mayusculas) {
    let mensaje="No se permiten mayúsculas";
    editarHTML(mensaje);
} else if (caracteresEspeciales) {
    let mensaje="No se permiten caracteres especiales";
    editarHTML(mensaje);
} else {
    return(texto); 
}
}

function limpiarCard(){

    document.getElementById("ocultar").style.visibility="hidden"
    let texto=textoOriginal();
    document.getElementById("texto").value=textoInicial;
    cambiarTexto(texto);

}

function cambiarTexto(texto){
    let textoEncriptado=encriptarTexto(texto);
    editarHTML(textoEncriptado);
}

function editarHTML(texto){
    let nuevoTexto=document.getElementById("nuevo");
    nuevoTexto.innerHTML=texto;
}

function encriptarTexto(texto){
    let textoNuevo=texto
        .replace(/e/g, 'enter') 
        .replace(/i/g, 'imes') 
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
return textoNuevo; 
}

function desencriptarTexto(){

    let textoDesencriptado=document.getElementById("nuevo").innerText
        .replace(/enter/g, 'e') 
        .replace(/imes/g, 'i')   
        .replace(/ai/g, 'a')     
        .replace(/ober/g, 'o')    
        .replace(/ufat/g, 'u'); 
    return (editarHTML(textoDesencriptado));
}
