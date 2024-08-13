const textoEntrada = document.getElementById('textoEntrada');

const textoSalida = document.getElementById('textoSalida');
const placeholderImagen = document.getElementById('placeholderImagen');
const mensajesYCopiar = document.querySelector('.mensajesYCopiar');
const botonCopiar = document.getElementById('copyBtn');
const mensajeNoEncontrado = document.querySelector('.mensajeNoEncontrado');
const mensajeInformativo  = document.querySelector('.mensajeInformativo');


function botonEncriptarTexto() {
    const texto = textoEntrada.value.trim();
    if (texto === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    const textoEncriptado = encriptarTexto(texto);
    textoSalida.value = textoEncriptado;

    // Mostrar el textarea con el texto encriptado y ocultar la imagen, mensajes, y mostrar el botón "Copiar"
    mostrarTextoSalida();
}

function encriptarTexto(textoAEncriptar) {
    return textoAEncriptar
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function botonDesencriptarTexto() {
    const texto = textoEntrada.value.trim();
    if (texto === "") {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }
    const textoDesencriptado = desencriptarTexto(texto);
    textoSalida.value = textoDesencriptado;

    // Mostrar el textarea con el texto desencriptado y ocultar la imagen, mensajes, y mostrar el botón "Copiar"
    mostrarTextoSalida();
}

function desencriptarTexto(textoADesencriptar) {
    return textoADesencriptar
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function mostrarTextoSalida() {
    // Ocultar la imagen y la sección de mensajes
    placeholderImagen.style.display = "none";
   mensajeNoEncontrado.style.display = "none";
   mensajeInformativo.style.display = "none"; 
    // mensajesYCopiar.style.display = "none";

    // Mostrar el textarea y el botón "Copiar"
    textoSalida.style.display = "block";
    botonCopiar.style.display = "block";
}

function copyText() {
    if (textoSalida.value.trim() === "") {
        alert("No hay texto para copiar.");
        return;
    }
    navigator.clipboard.writeText(textoSalida.value)
        .then(() => {
            console.log("Texto copiado al portapapeles");

            // Ocultar el textarea y el botón "Copiar" y mostrar la imagen y mensajes
            ocultarTextoSalida();
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

function ocultarTextoSalida() {
    // Ocultar el textarea y el botón "Copiar"
    textoSalida.style.display = "none";
    botonCopiar.style.display = "none";

    // Mostrar la imagen y la sección de mensajes
    placeholderImagen.style.display = "block";
   mensajeNoEncontrado.style.display = "block";
   mensajeInformativo.style.display = "block"; 
    
}
