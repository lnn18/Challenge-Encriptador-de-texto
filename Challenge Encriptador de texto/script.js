const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const textArea = document.querySelector(".container__form__mensaje");
const muneca = document.querySelector(".imagen__muneca");
const btnEncriptar= document.querySelector(".container__botones_encriptar");
const btnDesencriptar= document.querySelector(".container__botones_desencriptar");
const textoParrafo = document.querySelector(".container__mensajes__texto");
const mensajeTitulo = document.querySelector(".container__mensajes__titulo");
const btnCopiar = document.querySelector(".boton__copiar");
;
function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";

    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;

    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    if(mensaje === ""){
        muneca.style.display = "block";
        textoParrafo.removeAttribute("style");
        mensajeTitulo.removeAttribute("style");
        muneca.removeAttribute("style");
        mensajeTitulo.textContent = "Ningún mensaje fue encontrado";
        textoParrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        btnCopiar.style.display = "none";
    }
    else{
        textoParrafo.removeAttribute("style");
        let mensajeEncriptado = encriptarMensaje(mensaje);
        textoParrafo.style.textAlign = "left";
        textoParrafo.textContent = mensajeEncriptado;
        muneca.style.display = "none";
        mensajeTitulo.style.textAlign = "left";
        mensajeTitulo.textContent = "Texto Encriptado: ";
        btnCopiar.style.display = "block";
    }
    
});

btnDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    if(mensaje === ""){
        muneca.style.display = "block";
        textoParrafo.removeAttribute("style");
        mensajeTitulo.removeAttribute("style");
        muneca.removeAttribute("style");
        mensajeTitulo.textContent = "Ningún mensaje fue encontrado";
        textoParrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        btnCopiar.style.display = "none";
        
    }
    else {
        textoParrafo.removeAttribute("style");
        let mensajeDesencriptado = desencriptarMensaje(mensaje);
        textoParrafo.style.textAlign = "left";
        textoParrafo.textContent = mensajeDesencriptado;
        muneca.style.display = "none";
        mensajeTitulo.style.textAlign = "left";
        mensajeTitulo.textContent = "Texto Desencriptado: ";
        btnCopiar.style.display = "block";
    }
    
});

btnCopiar.addEventListener("click", (e)=>{
    let textoCopiado = textoParrafo.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        console.log(`Texto copiado: ${textoCopiado}`);
        mensajeTitulo.removeAttribute("style");
        mensajeTitulo.textContent = "Texto Copiado";
        textoParrafo.style.display = "none";
        btnCopiar.style.display = "none";
    });

});